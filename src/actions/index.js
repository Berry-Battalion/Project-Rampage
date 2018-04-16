import {
    AUTH_USER
} from './types';

export function authenticateUser(credentials) {
    if(credentials.username === 'Admin' && credentials.password === 'Pass') {
        return { type: AUTH_USER, payload: true};
    }

    return {type: AUTH_USER, payload: false};
}