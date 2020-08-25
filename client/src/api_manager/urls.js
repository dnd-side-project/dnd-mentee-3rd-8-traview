let url = 'http://localhost:3000';
// url = 'http://192.168.200.177:8000';

if (process.env.NODE_ENV === 'production') {
    url = 'http://localhost.com:3000';
}

export const BASE_URL = url + '/api';
export const DOMAIN = url;
