import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
    className?: string
}

const ArticlesPage = ({ className }: ArticlesPageProps) => (
    <div className={classNames('', {}, [className])}>
        ArticlePage
    </div>
);

export default memo(ArticlesPage);
