import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';

import {
    useState,
} from 'react';
import { CodeInput } from 'shared/ui/CodeInput/CodeInput';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string
}

const LoginForm = ({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <CodeInput
                type="text"
                placeholder={t('Введите username')}
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoFocus
            />
            <CodeInput
                type="text"
                placeholder={t('Введите пароль')}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <Button className={cls.btn}>{t('Войти')}</Button>
        </div>
    );
};

export default LoginForm;
