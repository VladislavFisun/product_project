import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useEffect } from 'react';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { CommentList, getComments, getCommentsLoading } from 'entities/Comment';
import { useDispatch, useSelector } from 'react-redux';
import { fetchComments } from 'entities/Comment/model/servises/fetchComments';

interface ArticleDetailsPageProps {
    className?: string
}

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const comments = useSelector(getComments.selectAll);
    const commentsLoading = useSelector(getCommentsLoading);

    useEffect(() => {
        dispatch(fetchComments(id));
    }, [dispatch, id]);

    return (
        <div className={classNames('', {}, [className])}>
            { id && <ArticleDetails id={id} />}
            <CommentList comments={comments} isLoading={commentsLoading} />
        </div>
    );
};

export default memo(ArticleDetailsPage);
