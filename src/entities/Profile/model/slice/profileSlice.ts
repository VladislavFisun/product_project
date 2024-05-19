import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProfile, ProfileSchema } from 'entities/Profile/model/types/profile';
import { loginByUserName } from 'features/AuthByUserName/model/services/loginServices';
import { fetchProfileData } from 'entities/Profile';
import { getProfileFormData } from 'entities/Profile/model/selectors/profileSelectors';
import { updateProfileData } from 'entities/Profile/model/services/updateProfileData';

const initialState = { readOnly: true, _init: false } as ProfileSchema;
export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        toggleReadOnly: (state):void => {
            state.readOnly = !state.readOnly;
            if (state.readOnly) {
                state.form = {
                    ...state.data,
                };
            }
        },
        updateProfile: (state, action:PayloadAction<IProfile>) => {
            state.form = {
                ...state.form,
                ...action.payload,
            };
        },
        setInit: (state) => {
            state._init = true;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(updateProfileData.fulfilled, (state, action:PayloadAction<IProfile>) => {
                state.isLoading = false;
                state.data = action.payload;
                state.form = action.payload;
                state.readOnly = true;
            })
            .addCase(updateProfileData.pending, (state, action) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(updateProfileData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload as string;
            })
            .addCase(fetchProfileData.fulfilled, (state, action:PayloadAction<IProfile>) => {
                state.isLoading = false;
                state.data = action.payload;
                state.form = action.payload;
            })
            .addCase(fetchProfileData.pending, (state, action) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchProfileData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload as string;
            });
    },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
