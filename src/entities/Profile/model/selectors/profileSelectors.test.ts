import { getProfileLoading } from 'entities/Profile/model/selectors/profileSelectors';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

describe('getProfileLoading', () => {
    test('should return login loading state', () => {
        const state = { profile: { isLoading: true } };
        expect(getProfileLoading(state as StateSchema)).toBe(true);
    });
});
