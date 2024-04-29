import { classNames } from 'shared/lib/classNames/classNames';
import React from 'react';
import cls from './Typography.module.scss';

type TTypographySize = 'm' | 'l' | 'xl';

type TTypographyType = 'base' | 'title'

type TTypographyState = 'default' | 'error'
interface TypographyProps {
    className?: string
    size?:TTypographySize
    type?:TTypographyType
    children:React.ReactNode
    state?:TTypographyState,
    fontColor?:string
}

const Typography = ({
    className, fontColor, size, state, type = 'base', children,
}: TypographyProps) => (
    <span
        className={classNames(cls[type], {}, [className, cls[size], cls[state]])}
        style={{ color: fontColor }}
    >
        {children}
    </span>
);

export { Typography };
