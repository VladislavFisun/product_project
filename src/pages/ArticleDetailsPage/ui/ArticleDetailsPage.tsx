import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { ArticleDetails } from 'entities/Article';
import { useLocation, useParams } from 'react-router-dom';
import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
    className?: string
}

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
    const { id } = useParams();
    return (
        <div className={classNames('', {}, [className])}>
            { id && <ArticleDetails id={id} />}
        </div>
    );
};

export default memo(ArticleDetailsPage);
