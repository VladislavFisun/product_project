import { createSlice } from '@reduxjs/toolkit';
import { ProfileSchema } from 'entities/Profile/model/types/profile';

const initialState = {} as ProfileSchema;
export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
    },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
