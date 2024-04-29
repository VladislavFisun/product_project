import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { userReducer as user } from 'entities/User';

export function createReduxStore(initialState?:StateSchema) {
    const rootReducer:ReducersMapObject<StateSchema> = { user };
    return configureStore<StateSchema>({
        reducer: rootReducer,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
}
