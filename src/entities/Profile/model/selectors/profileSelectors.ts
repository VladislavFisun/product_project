import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const getProfileData = (state:StateSchema) => state.profile?.data;
export const getProfileError = (state:StateSchema) => state.profile?.error;
export const getProfileLoading = (state:StateSchema) => state.profile?.isLoading;
