import axios from 'axios';
import { loginByUserName } from 'features/AuthByUserName/model/services/loginServices';

import { userActions } from 'entities/User';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/testAsyncThunk';

const MOCK_AXIOS = jest.mocked(axios, true);

jest.mock('axios');
describe('loginService.test', () => {
    test('getUserData', async () => {
        const userResponse = { username: '123', id: '1' };
        const userRequest = { username: '123', password: '123' };
        MOCK_AXIOS.post.mockReturnValue(Promise.resolve({ data: userResponse }));
        const thunk = new TestAsyncThunk(loginByUserName);
        const result = await thunk.callThunk(userRequest);
        expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userResponse));
        expect(MOCK_AXIOS.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
    });
});
