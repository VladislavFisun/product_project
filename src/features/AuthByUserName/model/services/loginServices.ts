import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User, userActions } from 'entities/User';
import { useTranslation } from 'react-i18next';
import i18n from 'shared/config/i18n/i18n';
import { USER_DATA } from 'shared/const/localStorage/localStorageConst';
import { ThunkConfig, ThunkExtraArguments } from 'app/providers/StoreProvider/config/StateSchema';

interface LoginRequest {
    username: string;
    password: string;
}

export const loginByUserName = createAsyncThunk<User, LoginRequest, ThunkConfig<string>>(
    'login/loginByUserName',
    async (payload:LoginRequest, thunk) => {
        const { extra, dispatch, rejectWithValue } = thunk;
        try {
            const { data } = await extra.api.post<User>('/login', payload);

            extra.navigate('/about');
            if (!data) throw new Error();
            dispatch(userActions.setAuthData(data));
            localStorage.setItem(USER_DATA, JSON.stringify(data));
            return data;
        } catch (e) {
            return rejectWithValue(i18n.t('Неправильный логин или пароль'));
        }
    },
);
