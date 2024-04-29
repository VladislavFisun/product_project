import { classNames } from 'shared/lib/classNames/classNames';
import React, {
    InputHTMLAttributes, forwardRef, RefObject,
} from 'react';
import cls from './Inpute.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{}

const Input = forwardRef<HTMLInputElement, InputProps>(({
    className, ...inputProps
}, ref:| RefObject<HTMLInputElement>
    | null) => (<input className={classNames(cls.input, {}, [])} {...inputProps} ref={ref} />
));
Input.displayName = 'Input';
export { Input };
