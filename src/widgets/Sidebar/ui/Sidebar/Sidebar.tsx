import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import { Button, ButtonSize, ThemeButton } from 'shared/ui/Button/Button';
import SidebarItem from 'widgets/Sidebar/ui/SidebarItem/SidebarItem';
import { SidebarItemList } from 'widgets/Sidebar/types';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
        >
            <div className={cls.links}>
                {SidebarItemList.map((item) => <SidebarItem collapsed={collapsed} key={item.path} path={item.path} text={item.text} Icon={item.Icon} />)}

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
