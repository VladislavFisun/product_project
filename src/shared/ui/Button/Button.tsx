import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC, useMemo } from 'react';
import cls from './Button.module.scss';

export enum ThemeButton {
    CLEAR = 'clear',
    OUTLINE = 'outline',
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
        ...otherProps
    } = props;

    const mods = useMemo(() => ({
        [cls[theme]]: true,
        [cls.square]: square,
        [cls[size]]: true,
    }), [theme, square, size]);

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
