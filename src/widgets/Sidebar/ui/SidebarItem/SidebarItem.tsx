import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { ISidebarItem } from 'widgets/Sidebar/types';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './SidebarItem.module.scss';

interface SidebarItemProps extends ISidebarItem {
    collapsed?:boolean;
}

const SidebarItem = memo(({
    path = '/', theme = AppLinkTheme.SECONDARY, Icon, text, collapsed = false,
}: SidebarItemProps) => {
    const { t } = useTranslation();
    const mods = {
        collapsed,
    };
    return (
        <AppLink theme={theme} to={path} className={classNames(cls.link, mods)}>
            {Icon && <Icon className={cls.icon} />}
            {!collapsed && <p className={classNames(cls.linkText, {}, [])}>{t(text)}</p>}
        </AppLink>
    );
});

export default SidebarItem;
