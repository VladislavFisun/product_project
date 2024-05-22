import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const getCommentsLoading = (state:StateSchema) => state.comments?.isLoading;
export const getCommentsError = (state:StateSchema) => state.comments?.error;
