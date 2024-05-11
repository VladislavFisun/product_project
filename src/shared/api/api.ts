import axios from 'axios';
import { USER_DATA } from 'shared/const/localStorage/localStorageConst';

export const $api = axios.create({
    // eslint-disable-next-line no-undef
    baseURL: __API__,
    headers: {
        authorization: localStorage.getItem(USER_DATA),
    },
});
