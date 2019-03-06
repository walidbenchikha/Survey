import { combineReducers } from 'redux';
import register from './register';
import session from './session';

const root = combineReducers({
    register,
    session
});

export default root;
