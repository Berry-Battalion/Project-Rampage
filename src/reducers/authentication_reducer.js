import {
    AUTH_USER
} from '../actions/types';

const initialState = { authenticated: false };

export default function(state = initialState, action) {
    console.log('reducer', action.type, action.payload)
    switch(action.type) {
        case AUTH_USER:
            return {...state, authenticated: action.payload };
        default:
            return state; 
    }
}