import { classNames } from 'shared/lib/classNames/classNames';
import { usePopover } from 'shared/ui/Popover/Popover';
import Portal from 'shared/ui/Portal/Portal';
import React from 'react';

interface PopoverContentProps {
    children: React.ReactElement
}

const PopoverContent = ({ children }: PopoverContentProps) => {
    const { position, anchor, setTooltip } = usePopover();
    return (
        <>
            {anchor && (
                <Portal>
                    <div ref={setTooltip} style={{ top: position.top, left: position.left }} className="tooltip">
                        {children}
                    </div>
                </Portal>
            )}
        </>
    );
};

export default PopoverContent;
