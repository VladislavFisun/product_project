import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import { Button, ButtonSize, ThemeButton } from 'shared/ui/Button/Button';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const { t } = useTranslation();

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
        >
            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.main} className={cls.link}>
                    <MainIcon className={cls.icon} />
                    <p className={cls.linkText}>{t('Главная')}</p>
                </AppLink>

                <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.about} className={cls.link}>
                    <AboutIcon className={cls.icon} />
                    <p className={cls.linkText}>{t('О сайте')}</p>
                </AppLink>

            </div>
            <Button
                data-testid="sidebar-toggle"
                onClick={onToggle}
                square
                size={ButtonSize.xl}
                theme={ThemeButton.BACKGROUND_INVERTED}
                className={cls.collapseBtn}
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} short={collapsed} />
            </div>
        </div>
    );
};
