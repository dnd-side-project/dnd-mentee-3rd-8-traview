import axios from 'axios';
import { LOGIN_USER } from './types';

export function loginUser(dataToSubmit) {
    /* API 주소가 아직 없어서 임시로 넣었습니다. */
    const request = axios
        .post('/api/users/login', dataToSubmit)
        .then((response) => response.data);

    return {
        type: LOGIN_USER,
        payload: request,
    };
}
