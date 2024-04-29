import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { USER_DATA } from 'shared/const/localStorage/localStorageConst';
import { User, UserSchema } from '../types/userTypes';

const initialState :UserSchema = {};
export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action:PayloadAction<User>) => {
            state.authData = action.payload;
        },
        initAuthData: (state) => {
            const savedUser = localStorage.getItem(USER_DATA);
            if (savedUser) state.authData = JSON.parse(savedUser);
        },

        logout: (state) => {

        },
    },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
