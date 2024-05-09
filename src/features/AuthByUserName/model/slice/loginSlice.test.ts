import { loginActions, loginReducer } from 'features/AuthByUserName/model/slice/loginSlice';
import { DeepPartial } from '@reduxjs/toolkit';
import { LoginSchema } from 'features/AuthByUserName/model/types/loginSchema';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

describe('loginSlice.test', () => {
    test('setUsername', () => {
        const state:DeepPartial<LoginSchema> = { username: '123' };
        const result = loginReducer(state as LoginSchema, loginActions.setUserName('124'));
        expect(loginReducer(state as LoginSchema, loginActions.setUserName('124'))).toStrictEqual({ username: '124' });
    });
});
