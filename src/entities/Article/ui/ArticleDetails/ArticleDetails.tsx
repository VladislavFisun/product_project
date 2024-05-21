import { classNames } from 'shared/lib/classNames/classNames';
import { useDispatch, useSelector } from 'react-redux';
import { memo, useCallback, useEffect } from 'react';
import { fetchArticleById } from 'entities/Article/model/service/articleServices';
import { getArticleDetails, getArticleDetailsError, getArticleDetailsLoading } from 'entities/Article';
import Skeleton from 'shared/ui/Skeleton/Skeleton';
import Avatar from 'shared/ui/Avatar/Avatar';
import { Typography } from 'shared/ui/Typography/Typography';
import CalendarIcon from 'shared/assets/icons/calendar-20-20.svg';
import EyeIcon from 'shared/assets/icons/eye-20-20.svg';
import { ArticleBlock } from 'entities/Article/model/types/article.types';
import ArticleCodeBlock from 'entities/Article/ui/ArticleCodeBlock/ArticleCodeBlock';
import ArticleTextBlock from 'entities/Article/ui/ArticleTextBlock/ArticleTextBlock';
import ArticleImageBlock from 'entities/Article/ui/ArticleImageBlock/ArticleImageBlock';
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

    const renderBlock = useCallback((block:ArticleBlock) => {
        switch (block.type) {
        case 'CODE':
            return <ArticleCodeBlock article={block} className={cls.block} key={block.id} />;
        case 'TEXT':
            return <ArticleTextBlock article={block} className={cls.block} key={block.id} />;
        case 'IMAGE':
            return <ArticleImageBlock article={block} className={cls.block} key={block.id} />;
        default:
            return null;
        }
    }, []);

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
            <Avatar src={articleDetails?.img} size={200} className={cls.avatar} />
            <Typography as="header" size="xl" type="title">{articleDetails?.title}</Typography>
            <Typography as="p" size="l" type="base">{articleDetails?.subtitle}</Typography>
            <div className={cls.details}>
                <EyeIcon className={cls.icon} />
                <Typography>{articleDetails?.views}</Typography>
            </div>
            <div className={cls.details}>
                <CalendarIcon className={cls.icon} />
                <Typography>{articleDetails?.createdAt}</Typography>
            </div>
            {articleDetails?.blocks?.map((block) => renderBlock(block))}
        </div>
    );
});
