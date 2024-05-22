import { createSlice, createEntityAdapter, PayloadAction } from '@reduxjs/toolkit';
import { Comment, CommentSchema } from 'entities/Comment';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { updateProfileData } from 'entities/Profile/model/services/updateProfileData';
import { fetchComments } from 'entities/Comment/model/servises/fetchComments';

const commentsAdapter = createEntityAdapter<Comment>({
    selectId: (comment:Comment) => comment.id,
});

export const getComments = commentsAdapter.getSelectors<StateSchema>((state) => state.comments || commentsAdapter.getInitialState());

const initialState = {} as CommentSchema;

export const commentSlice = createSlice({
    name: 'comments',
    initialState: commentsAdapter.getInitialState(initialState),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchComments.fulfilled, (state, action:PayloadAction<Comment[]>) => {
                state.isLoading = false;
                commentsAdapter.setAll(state, action.payload);
            })
            .addCase(updateProfileData.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(updateProfileData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload as string;
            });
    },
});

export const { reducer: commentReducer } = commentSlice;
