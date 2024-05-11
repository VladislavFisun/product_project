import { classNames } from 'shared/lib/classNames/classNames';
import React, {
    useCallback, useEffect, useState, Fragment,
} from 'react';
import Portal from 'shared/ui/Portal/Portal';
import cls from './Modal.module.scss';

export interface ModalProps {
    className?: string
    children?: React.ReactNode;
    isOpen?: boolean
    onClose?: () => void;
    closeOnEscape?:boolean
    lazy?: boolean
}

const Modal = ({
    className, children, isOpen, onClose, lazy = true, closeOnEscape = true,
}: ModalProps) => {
    const [isMounted, setIsMounted] = useState(false);

    const mods = {
        [cls.opened]: isOpen,
    };
    const onEscapeClose = useCallback((e:KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeOnEscape && isOpen && onClose();
        }
    }, [onClose, isOpen, closeOnEscape]);

    useEffect(() => {
        isOpen && setIsMounted(true);
    }, [isOpen]);

    useEffect(() => {
        window.addEventListener('keydown', onEscapeClose);
        return () => {
            window.removeEventListener('keydown', onEscapeClose);
        };
    }, [onClose, onEscapeClose]);

    if (lazy && !isMounted) return null;

    return (
        <Fragment>
            {isOpen && (
                <Portal>
                    <div className={classNames(cls.Modal, mods, [className])} onClick={onClose}>
                        <div className={cls.overlay}>
                            <div className={cls.content} onClick={(e) => e.stopPropagation()}>{children}</div>
                        </div>
                    </div>
                </Portal>
            )}
        </Fragment>
    );
};

export default Modal;
