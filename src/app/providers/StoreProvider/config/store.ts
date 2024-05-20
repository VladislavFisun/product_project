import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { userReducer as user } from 'entities/User';
import { loginReducer as login } from 'features/AuthByUserName/model/slice/loginSlice';
import { profileReducer as profile } from 'entities/Profile';
import { articleDetailsReducer as articleDetails } from 'entities/Article';
import { $api } from 'shared/api/api';
import { NavigateFunction } from 'react-router-dom';

export function createReduxStore(initialState?:StateSchema, navigate?:NavigateFunction) {
    const rootReducer:ReducersMapObject<StateSchema> = {
        user, login, profile, articleDetails,
    };
    const store = configureStore<StateSchema>({
        reducer: rootReducer,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        // @ts-ignore
        middleware: (getDefaultMiddleware) => getDefaultMiddleware(
            {
                serializableCheck: false,
                thunk: {
                    extraArgument: {
                        api: $api,
                        navigate,
                    },
                },
            },
        ),
    });

    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
