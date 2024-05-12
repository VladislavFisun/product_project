import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const getProfileData = (state:StateSchema) => state.profile?.data;

export const getProfileFormData = (state:StateSchema) => state.profile?.form;
export const getProfileError = (state:StateSchema) => state.profile?.error;
export const getProfileLoading = (state:StateSchema) => state.profile?.isLoading;
export const getProfileReadonly = (state:StateSchema) => state.profile?.readOnly;
