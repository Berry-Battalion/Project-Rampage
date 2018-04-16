import { combineReducers } from 'redux';
import AuthenticationReducer from './authentication_reducer';

const rootReducer = combineReducers({
    auth: AuthenticationReducer
});

export default rootReducer;