import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { useCallback, useState } from 'react';
import { LoginModal } from 'features/AuthByUserName';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setAuthModal] = useState(false);
    const onToggle = useCallback(() => {
        setAuthModal((prev) => !prev);
    }, [setAuthModal]);

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <Button onClick={onToggle} theme={ThemeButton.CLEAR_INVERTED}>{t('Войти')}</Button>
                <AppLink theme={AppLinkTheme.SECONDARY} to="/" className={cls.mainLink}>
                    {t('Главная')}
                </AppLink>
                <AppLink theme={AppLinkTheme.RED} to="/about">
                    {t('О сайте')}
                </AppLink>
            </div>
            <LoginModal lazy isOpen={isAuthModal} onClose={onToggle}>
                <div>
                    is Authed
                </div>
            </LoginModal>
        </div>
    );
};
