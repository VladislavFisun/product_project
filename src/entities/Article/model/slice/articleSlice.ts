import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Article, ArticleDetailsSchema } from 'entities/Article';
import { updateProfileData } from 'entities/Profile/model/services/updateProfileData';
import { IProfile } from 'entities/Profile/model/types/profile';
import { fetchProfileData } from 'entities/Profile';
import { fetchArticleById } from 'entities/Article/model/service/articleServices';

const initialState = {} as ArticleDetailsSchema;
export const articleDetailsSlice = createSlice({
    name: 'articleDetails',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleById.fulfilled, (state, action:PayloadAction<Article>) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchArticleById.pending, (state, action) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchArticleById.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: articleDetailsActions } = articleDetailsSlice;
export const { reducer: articleDetailsReducer } = articleDetailsSlice;
