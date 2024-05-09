import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const getLoginState = (state:StateSchema) => state?.login;
export const getLoginStateLoading = (state:StateSchema) => state?.login.isLoading;
export const getLoginStateError = (state:StateSchema) => state?.login.error;
export const getLoginStateName = (state:StateSchema) => state?.login.username;
export const getLoginStatePassword = (state:StateSchema) => state?.login.password;
