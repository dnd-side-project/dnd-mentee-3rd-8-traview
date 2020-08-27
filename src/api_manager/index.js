import { create } from 'apisauce';
// import camelcaseKeys from 'camelcase-keys';
// import snakecaseKeys from 'snakecase-keys';
import { BASE_URL } from './urls';

// let config = {
//     headers: {
//       "Content-Type": "application/json",
//       'Access-Control-Allow-Origin': '*',
//       }
//     }
const api = create({
    baseURL: BASE_URL,
    withCredentials: true,
});

export const extraApi = create({ baseURL: BASE_URL });
//
// api.addResponseTransform(response => {
//     console.log(response);
//     if (response.status && response.status >= 500) {
//         throw "Server Error"
//     } else if (!response.status) {
//         throw "API Error"
//     } else {
//         if(!response.data){return}
//         if (response.data instanceof Object) {
//             response.data = camelcaseKeys(response.data, {deep: true});
//         }
//
//         if (response.data.message instanceof Object) {
//             response.data.message = camelcaseKeys(response.data.message, {deep: true});
//             response.errors = response.data.message;
//         }
//     }
// });
//
// api.addRequestTransform(request => {
//     if (request.params instanceof Object) {
//         request.params = snakecaseKeys(request.params, {deep: true});
//     }
//     if (request.data instanceof Object && request.data.constructor.name === 'Object') {
//         request.data = snakecaseKeys(request.data, {deep: true});
//     }
// });

//
// export const getUsers = async () => {
//     return api.get('v1/admin/users/');
// };
//
// export const getUserProfile = async () => {
//     return api.get('v1/me/profile/')
// };
//
// export const signIn = async (values) => {
//     return await api.post('v1/users/sign-in/', {username: values.username, password: values.password})
//     // return api.post('v1/users/sign-in/', {username: values.username, password: values.password},config)
// };
//
// export const signOut = async () => {
//     return api.get('v1/users/sign-out/',)
// };

// export const getProducts = async () => {
//     return api.get('v1/admin/products/');
// };

// export const getASRequests = async () => {
//     return api.get('v1/admin/as-requests/')
// }

export default api;
