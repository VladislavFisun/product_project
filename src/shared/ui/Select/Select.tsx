import { classNames } from 'shared/lib/classNames/classNames';
import {
    ChangeEvent, memo, SelectHTMLAttributes, useMemo,
} from 'react';
import cls from './Select.module.scss';

type customSelectProps = Omit<SelectHTMLAttributes<HTMLSelectElement>, 'value' | 'onChange'>

export interface SelectOptions {
    label?: string
    value: string | number
}
interface SelectProps extends customSelectProps {
    className?: string
    label?:string
    options?: SelectOptions[]
    value?:string
    onChange?:(value:string)=>void
}

const Select = memo(({
    className,
    label,
    options,
    onChange,
    value,
    ...selectProps
}: SelectProps) => {
    const changeHandler = (e:ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value);
    };

    const optionsList = useMemo(() => options.map((option) => (
        <option value={option.value} className={cls.option} key={option.value}>
            {option.label}
        </option>
    )), [options]);
    const mods = {

    };
    return (
        <div className={classNames(cls.Wrapper, mods, [className])}>
            {label && (
                <span className={cls.label}>
                    {`${label}>`}
                </span>
            )}
            <select className={cls.select} value={value} {...selectProps} onChange={(e) => changeHandler(e)}>
                {optionsList}
            </select>
        </div>
    );
});

export default Select;
