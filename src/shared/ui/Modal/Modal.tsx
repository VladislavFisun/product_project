import { classNames } from 'shared/lib/classNames/classNames';
import React, { useCallback, useEffect } from 'react';
import Portal from 'shared/ui/Portal/Portal';
import cls from './Modal.module.scss';

interface ModalProps {
    className?: string
    children?: React.ReactNode;
    isOpen?: boolean
    onClose?: () => void;
    closeOnEscape?:boolean
}

const Modal = ({
    className, children, isOpen, onClose, closeOnEscape = true,
}: ModalProps) => {
    const mods = {
        [cls.opened]: isOpen,
    };
    const onEscapeClose = useCallback((e:KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeOnEscape && onClose();
        }
    }, [onClose, closeOnEscape]);

    useEffect(() => {
        window.addEventListener('keydown', onEscapeClose);
        return () => {
            window.removeEventListener('keydown', onEscapeClose);
        };
    }, [onClose, onEscapeClose]);

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className])} onClick={onClose}>
                <div className={cls.overlay}>
                    <div className={cls.content} onClick={(e) => e.stopPropagation()}>{children}</div>
                </div>
            </div>
        </Portal>
    );
};

export default Modal;
