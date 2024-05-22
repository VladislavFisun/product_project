import { classNames } from 'shared/lib/classNames/classNames';
import { Comment } from 'entities/Comment/model/types/comment.types';
import Avatar from 'shared/ui/Avatar/Avatar';
import { Typography } from 'shared/ui/Typography/Typography';
import Skeleton from 'shared/ui/Skeleton/Skeleton';
import cls from './CommentCard.module.scss';

interface CommentCardProps {
    className?: string
    comment?:Comment
    isLoading?: boolean
}

const CommentCard = ({ className, comment, isLoading }: CommentCardProps) => {
    if (isLoading) {
        return <Skeleton width="100%" height="60px" />;
    }
    return (
        <div className={classNames(cls.CommentCard, {}, [className])}>
            <div className={cls.commentHeader}>
                {comment?.user?.avatar && <Avatar size={30} src={comment?.user?.avatar} />}
                <Typography>{comment?.user?.username}</Typography>
            </div>
            <div className={cls.commentContent}>{comment?.text}</div>
        </div>
    );
};

export default CommentCard;
