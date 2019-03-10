import { combineReducers } from 'redux';
import register from './register';
import session from './session';
import surveys from './surveys';
import survey from './survey';
import create_survey from './create_survey';
import edit_survey from './edit_survey';

const root = combineReducers({
    register,
    session,
    surveys,
    survey,
    create_survey,
    edit_survey
});

export default root;
