import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import i18n from 'shared/config/i18n/i18n';
import { Article } from 'entities/Article';

export const fetchArticleById = createAsyncThunk<Article, string, ThunkConfig<string>>(
    'article/fetchArticleById',
    async (articleId, thunk) => {
        const { extra, dispatch, rejectWithValue } = thunk;
        try {
            const { data } = await extra.api.get<Article>(`/articles/${articleId}`);

            return data;
        } catch (e) {
            return rejectWithValue(i18n.t('Ошибка при загрузке профиля'));
        }
    },
);
