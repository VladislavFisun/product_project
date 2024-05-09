import {
    getLoginState,
    getLoginStateError,
    getLoginStateLoading, getLoginStateName, getLoginStatePassword,
} from 'features/AuthByUserName/model/selectors/loginSelectors';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

describe('getLoginState', () => {
    test('should return login state', () => {
        const state = {
            login: {
                isLoading: true, error: 'error', username: 'user123', password: 'password123',
            },
        };
        expect(getLoginState(state as StateSchema)).toEqual(state.login);
    });
});

describe('getLoginStateLoading', () => {
    test('should return login loading state', () => {
        const state = { login: { isLoading: true } };
        expect(getLoginStateLoading(state as StateSchema)).toEqual(true);
    });
});

describe('getLoginStateError', () => {
    test('should return login error state', () => {
        const state = { login: { error: 'Invalid credentials' } };
        expect(getLoginStateError(state as StateSchema)).toEqual('Invalid credentials');
    });
});

describe('getLoginStateName', () => {
    test('should return login username', () => {
        const state = { login: { username: 'user123' } };
        expect(getLoginStateName(state as StateSchema)).toEqual('user123');
    });
});

describe('getLoginStatePassword', () => {
    it('should return login password', () => {
        const state = { login: { password: 'password123' } };
        expect(getLoginStatePassword(state as StateSchema)).toEqual('password123');
    });
});
