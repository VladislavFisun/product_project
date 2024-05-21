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
    as?:React.ElementType
}

const Typography = ({
    className, fontColor, size, state, type = 'base', children, as: Component = 'span',
}: TypographyProps) => (
    <Component
        className={classNames(cls[type], {}, [className, cls[size], cls[state]])}
        style={{ color: fontColor }}
    >
        {children}
    </Component>
);

export { Typography };
