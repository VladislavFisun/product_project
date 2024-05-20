import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const getArticleDetails = (state:StateSchema) => state.articleDetails.data;
export const getArticleDetailsError = (state:StateSchema) => state.articleDetails.error;
export const getArticleDetailsLoading = (state:StateSchema) => state.articleDetails.isLoading;
