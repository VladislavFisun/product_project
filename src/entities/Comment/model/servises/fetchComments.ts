import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import { Comment } from 'entities/Comment';

export const fetchComments = createAsyncThunk<Comment[], string, ThunkConfig<string>>(
    'comments/fetchComments',
    async (id, thunk) => {
        const { extra, dispatch, rejectWithValue } = thunk;
        try {
            const { data } = await extra.api.get<Comment[]>('/comments', {
                params: {
                    articleId: id,
                    _expand: 'user',
                },
            });

            return data;
        } catch (e) {
            return rejectWithValue(e);
        }
    },
);
