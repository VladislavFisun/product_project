import { SelectOptions } from 'shared/ui/Select/Select';
import { Currency } from 'shared/const/common';

export const getCurrencyList = () => {
    const result:SelectOptions[] = [];
    const key = 'USD';
    const keys = Object.values(Currency);
    keys.forEach((key, index) => {
        result.push({ label: key, value: key });
    });
    return result;
};
