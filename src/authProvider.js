import { AUTH_LOGIN, AUTH_ERROR, AUTH_LOGOUT } from 'react-admin';

export default (type, params) => {
    if (type === AUTH_LOGIN) {
        const { username, password } = params;
        const request = new Request('http://localhost:4000/api/signIn', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: new Headers({ 'Content-Type': 'application/json' }),
        })
        return fetch(request)
            .then(response => {
                if (response.status < 200 || response.status >= 300) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then(({ token }) => {
                localStorage.setItem('auth-token', token);
            });
    }
    if (type === AUTH_LOGOUT) {
        localStorage.removeItem('auth-token');
        return Promise.resolve();
    }
    if (type === AUTH_ERROR) {
        const status  = params.status;
        if (status === 401 || status === 403) {
            localStorage.removeItem('auth-token');
            return Promise.reject();
        }
        return Promise.resolve();
    }
    return Promise.resolve();
}