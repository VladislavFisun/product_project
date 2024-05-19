import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
    className?: string
}

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => (
    <div className={classNames('', {}, [className])}>
        ArticleDetailsPage
    </div>
);

export default memo(ArticleDetailsPage);
