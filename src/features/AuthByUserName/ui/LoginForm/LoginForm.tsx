import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';

import { memo, useCallback } from 'react';
import { CodeInput } from 'shared/ui/CodeInput/CodeInput';
import { useDispatch, useSelector } from 'react-redux';
import { loginActions } from 'features/AuthByUserName/model/slice/loginSlice';
import { getLoginState } from 'features/AuthByUserName/model/selectors/loginSelectors';
import { loginByUserName } from 'features/AuthByUserName/model/services/loginServices';
import { Typography } from 'shared/ui/Typography/Typography';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string
    onSave?: ()=>void
}

const LoginForm = memo(({ className, onSave }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const {
        username, password, isLoading, error,
    } = useSelector(getLoginState);
    const onChangeUserName = useCallback((value:string) => {
        dispatch(loginActions.setUserName(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value:string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLogin = useCallback(async () => {
        await dispatch(loginByUserName({ username, password }));
        onSave();
    }, [dispatch, username, password, onSave]);

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <CodeInput
                type="text"
                placeholder={t('Введите username')}
                value={username}
                onChange={(e) => onChangeUserName(e.target.value)}
                autoFocus
            />
            <CodeInput
                type="text"
                placeholder={t('Введите пароль')}
                value={password}
                onChange={(e) => onChangePassword(e.target.value)}
            />
            {error && <Typography type="base" state="error">{error}</Typography>}
            <Button disabled={isLoading} onClick={onLogin} theme={ThemeButton.OUTLINE} className={cls.btn}>{t('Войти')}</Button>
        </div>
    );
});

export default LoginForm;
