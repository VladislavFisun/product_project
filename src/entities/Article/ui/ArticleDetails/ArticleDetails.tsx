import { classNames } from 'shared/lib/classNames/classNames';
import { useDispatch, useSelector } from 'react-redux';
import { memo, useEffect } from 'react';
import { fetchArticleById } from 'entities/Article/model/service/articleServices';
import { getArticleDetails, getArticleDetailsError, getArticleDetailsLoading } from 'entities/Article';
import Skeleton from 'shared/ui/Skeleton/Skeleton';
import cls from './ArticleDetails.module.scss';

interface ArticleDetailsProps {
    className?: string
    id:string
}

export const ArticleDetails = memo(({ className, id }: ArticleDetailsProps) => {
    const dispatch = useDispatch();
    const articleDetails = useSelector(getArticleDetails);
    const articleDetailsLoading = useSelector(getArticleDetailsLoading);
    const articleDetailsError = useSelector(getArticleDetailsError);
    useEffect(() => {
        dispatch(fetchArticleById(id));
    }, [id, dispatch]);

    if (articleDetailsLoading) {
        return (
            <div>
                <Skeleton width={200} style={{ marginBottom: '20px' }} height={200} border="50%" />
                <Skeleton width="30%" style={{ marginBottom: '20px' }} height={50} />
                <Skeleton width="60%" style={{ marginBottom: '20px' }} height={50} />
                <Skeleton width="80%" style={{ marginBottom: '20px' }} height={450} />
                <Skeleton width="80%" style={{ marginBottom: '20px' }} height={450} />
            </div>
        );
    }

    if (articleDetailsError) {
        return <div>Error</div>;
    }

    return (
        <div className={classNames(cls.ArticleDetails, {}, [className])}>
            {articleDetails?.id}
            - Article #id
        </div>
    );
});
