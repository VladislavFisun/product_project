import { classNames } from 'shared/lib/classNames/classNames';
import { usePopover } from 'shared/ui/Popover/Popover';
import React, { useLayoutEffect } from 'react';

interface PopoverTriggerProps {
    children: React.ReactElement
}

const PopoverTrigger = ({ children }: PopoverTriggerProps) => {
    const { setAnchor } = usePopover();
    return (
        React.cloneElement(children, {
            ...children.props,
            onMouseOut: () => setAnchor(null),
            onMouseOver: (e:React.MouseEvent<HTMLElement>) => setAnchor(e.currentTarget),
        })
    );
};

export default PopoverTrigger;
