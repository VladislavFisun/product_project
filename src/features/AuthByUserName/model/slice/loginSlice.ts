import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoginSchema } from 'features/AuthByUserName/model/types/loginSchema';
import { loginByUserName } from 'features/AuthByUserName/model/services/loginServices';
import { USER_DATA } from 'shared/const/localStorage/localStorageConst';

const initialState = {} as LoginSchema;
export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setUserName: (state, action:PayloadAction<string>) => {
            state.username = action.payload;
        },
        setPassword: (state, action:PayloadAction<string>) => {
            state.password = action.payload;
        },
        logout: (state) => {
            state = null;
            localStorage.removeItem(USER_DATA);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginByUserName.fulfilled, (state, action) => {
                state.isLoading = false;
            })
            .addCase(loginByUserName.pending, (state, action) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(loginByUserName.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload as string;
            });
    },
});

export const { actions: loginActions } = loginSlice;
export const { reducer: loginReducer } = loginSlice;
