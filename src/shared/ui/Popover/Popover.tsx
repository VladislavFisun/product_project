import { classNames } from 'shared/lib/classNames/classNames';
import React, {
    createContext, useContext, useLayoutEffect, useMemo, useRef, useState,
} from 'react';
import PopoverTrigger from 'shared/ui/Popover/ui/PopoverTrigger';
import PopoverContent from 'shared/ui/Popover/ui/PopoverContent';
import cls from './Popover.module.scss';

interface PopoverValue {
    setIsOpened:React.Dispatch<React.SetStateAction<boolean>>;
    position:{top:number, left:number};
    anchor:HTMLElement | null
    setPosition:React.Dispatch<React.SetStateAction<Record<string, number>>>
    setTooltip:React.Dispatch<React.SetStateAction<HTMLElement>>
    setAnchor:React.Dispatch<React.SetStateAction<HTMLElement>>
}

const PopoverContext = createContext<PopoverValue>(null);

export const PopoverProvider = ({ children }:{children:React.ReactNode}) => {
    const [position, setPosition] = useState({ top: 0, left: 0 });
    const [tooltip, setTooltip] = useState<HTMLElement>();
    const [anchor, setAnchor] = useState<HTMLElement>();

    useLayoutEffect(() => {
        if (!anchor || !tooltip) return;

        const anchorRect = anchor.getBoundingClientRect();
        const tooltipRect = tooltip.getBoundingClientRect();
        const BASE_GAP = 30;
        const TOP_SPACE = 5;
        const isTopAvailable = anchorRect.top - tooltipRect.height - TOP_SPACE > BASE_GAP;
        const topPosition = anchorRect.top - tooltipRect.height - TOP_SPACE;
        const bottomPosition = anchorRect.top + (tooltipRect.height + TOP_SPACE);
        setPosition({
            top: isTopAvailable ? topPosition : bottomPosition,
            left: anchorRect.left + anchorRect.width / 2 - tooltipRect.width / 2,
        });
    }, [anchor, tooltip]);

    const PopoverProps = useMemo(() => ({
        anchor,
        position,
        setPosition,
        setTooltip,
        setAnchor,
    } as PopoverValue), [position, setPosition, setTooltip, setAnchor, anchor]);
    return (
        <PopoverContext.Provider value={PopoverProps}>
            {children}
        </PopoverContext.Provider>
    );
};

export const Popover = Object.assign(PopoverProvider, {
    Trigger: PopoverTrigger,
    Content: PopoverContent,
});

export const usePopover = () => {
    const props = useContext(PopoverContext);
    if (!props) {
        throw new Error('usePopover must be used within a PopoverProvider');
    }
    return props;
};
