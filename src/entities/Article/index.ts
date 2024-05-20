export { ArticleDetails } from './ui/ArticleDetails/ArticleDetails';
export type { Article, ArticleDetailsSchema } from './model/types/article.types';
export { articleDetailsReducer } from './model/slice/articleSlice';
export { getArticleDetails, getArticleDetailsError, getArticleDetailsLoading } from './model/selectors/articleSelectors';
