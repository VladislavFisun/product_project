import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const userSelectors = (state:StateSchema) => state.user;

export const authSelector = (state:StateSchema) => state.user.authData;
