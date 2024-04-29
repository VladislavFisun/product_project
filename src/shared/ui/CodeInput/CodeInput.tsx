import { classNames } from 'shared/lib/classNames/classNames';
import React, {
    InputHTMLAttributes, useState, useEffect, useRef,
} from 'react';
import { Input } from 'shared/ui/Input/Input';
import cls from './CodeInput.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{}

const CodeInput = ({
    className, placeholder, value, autoFocus, ...inputProps
}:InputProps) => {
    const [focus, setFocus] = useState(false);
    const [caretPosition, setCaretPosition] = useState(0);

    const inputRef = useRef<HTMLInputElement>(null);
    const onFocus = () => {
        setFocus(true);
    };

    const onBlur = () => {
        setFocus(false);
    };

    const onSelectionChange = (e:any) => {
        setCaretPosition(e?.target?.selectionStart || 0);
    };

    useEffect(() => {
        if (autoFocus) {
            requestAnimationFrame(() => {
                setFocus(true);
                inputRef?.current?.focus();
            });
        }
    }, [autoFocus]);

    useEffect(() => {
        setCaretPosition(String(value).length);
    }, [value]);

    return (
        <div className={classNames(cls.InputWrapper, {}, [className])}>
            {placeholder && <div className={cls.placeholder}>{`${placeholder}>`}</div>}
            <div className={cls.caretWrapper}>
                <Input
                    ref={inputRef}
                    value={value}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onSelect={onSelectionChange}
                    className={classNames(cls.input, {}, [className])}
                    {...inputProps}
                />
                {focus && <span className={cls.caret} style={{ left: `${caretPosition * 9}px` }}></span>}
            </div>
        </div>
    );
};

export { CodeInput };
