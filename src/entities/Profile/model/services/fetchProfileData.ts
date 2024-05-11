import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User, userActions } from 'entities/User';
import { useTranslation } from 'react-i18next';
import i18n from 'shared/config/i18n/i18n';
import { USER_DATA } from 'shared/const/localStorage/localStorageConst';
import { ThunkConfig, ThunkExtraArguments } from 'app/providers/StoreProvider/config/StateSchema';
import { IProfile } from 'entities/Profile/model/types/profile';

export const fetchProfileData = createAsyncThunk<IProfile, void, ThunkConfig<string>>(
    'login/loginByUserName',
    async (_, thunk) => {
        const { extra, dispatch, rejectWithValue } = thunk;
        try {
            const { data } = await extra.api.get<IProfile>('/profile');

            return data;
        } catch (e) {
            return rejectWithValue(i18n.t('Ошибка при загрузке профиля'));
        }
    },
);
