import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC, useMemo } from 'react';
import cls from './Button.module.scss';

export enum ThemeButton {
    CLEAR = 'clear',
    CLEAR_INVERTED='clearInverted',
    OUTLINE = 'outline',
    OUTLINE_RED = 'outlineRed',
    BACKGROUND ='background',
    BACKGROUND_INVERTED ='backgroundInverted'
}

export enum ButtonSize {
    m='size_m',
    l='size_l',
    xl='size_xl'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?: ThemeButton;
    square?: boolean;
    size?:ButtonSize
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme,
        square,
        size = ButtonSize.m,
        disabled,
        ...otherProps
    } = props;

    const mods = {
        [cls[theme]]: true,
        [cls.disabled]: disabled,
        [cls.square]: square,
        [cls[size]]: true,
    };

    return (
        <button
            type="button"
            className={classNames(cls.Button, mods, [className])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
