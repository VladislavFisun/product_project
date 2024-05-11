import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { userReducer as user } from 'entities/User';
import { loginReducer as login } from 'features/AuthByUserName/model/slice/loginSlice';
import { profileReducer as profile } from 'entities/Profile';

export function createReduxStore(initialState?:StateSchema) {
    const rootReducer:ReducersMapObject<StateSchema> = { user, login, profile };
    const store = configureStore<StateSchema>({
        reducer: rootReducer,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        // @ts-ignore
        middleware: (getDefaultMiddleware) => getDefaultMiddleware(
            { serializableCheck: false },
        ),
    });

    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
