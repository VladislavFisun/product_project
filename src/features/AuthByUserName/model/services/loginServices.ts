import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User, userActions } from 'entities/User';
import { useTranslation } from 'react-i18next';
import i18n from 'shared/config/i18n/i18n';
import { USER_DATA } from 'shared/const/localStorage/localStorageConst';

interface LoginRequest {
    username: string;
    password: string;
}

export const loginByUserName = createAsyncThunk<User, LoginRequest>(
    'login/loginByUserName',
    async (payload:LoginRequest, thunkAPI) => {
        try {
            const { data, headers } = await axios.post<User>('http://localhost:8000/login', payload);
            if (!data) throw new Error();
            thunkAPI.dispatch(userActions.setAuthData(data));
            localStorage.setItem(USER_DATA, JSON.stringify(data));
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(i18n.t('Неправильный логин или пароль'));
        }
    },
);
