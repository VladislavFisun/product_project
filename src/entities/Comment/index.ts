export { Comment, CommentSchema } from './model/types/comment.types';
export { CommentList } from './ui/CommentList/CommentList';
export { getComments, commentReducer } from './model/slice/commentSlice';
export { getCommentsLoading, getCommentsError } from './model/selectors/commentsSelectors';
