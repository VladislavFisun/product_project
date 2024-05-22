import { classNames } from 'shared/lib/classNames/classNames';
import { Comment } from 'entities/Comment';
import { useTranslation } from 'react-i18next';
import CommentCard from 'entities/Comment/ui/CommentCard/CommentCard';
import { Typography } from 'shared/ui/Typography/Typography';
import cls from './CommentList.module.scss';

interface CommentListProps {
    className?: string
    comments?:Comment[]
    isLoading?: boolean
}

export const CommentList = ({ className, comments, isLoading }: CommentListProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.CommentList, {}, [className])}>
            <Typography as="header" size="l">{t('Комментарии')}</Typography>
            {comments && comments?.length ? comments?.map((comment) => <CommentCard key={comment.id} comment={comment} isLoading={isLoading} />)
                : t('Оставить комментарий')}
        </div>

    );
};
