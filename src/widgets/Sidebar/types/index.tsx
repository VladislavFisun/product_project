import React from 'react';
import { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import ProfileIcon from 'shared/assets/icons/profile-20-20.svg';
import ArticleIcon from 'shared/assets/icons/article-20-20.svg';

export interface ISidebarItem {
    path?:string
    text?:string
    theme?:AppLinkTheme
    Icon?:React.VFC<React.SVGProps<SVGSVGElement>>
}

export const SidebarItemList:ISidebarItem[] = [
    {
        path: RoutePath.main,
        text: 'Главная',
        Icon: MainIcon,
    },

    {
        path: RoutePath.about,
        text: 'О сайте',
        Icon: AboutIcon,
    },

    {
        path: RoutePath.profile,
        text: 'Профиль',
        Icon: ProfileIcon,
    }, {
        path: RoutePath.articles,
        text: 'Статьи',
        Icon: ArticleIcon,
    },
];
