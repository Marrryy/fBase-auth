import { combineReducers } from 'redux';
import auth from './auth_reducer';
import jobs from './jobs_reduces';

export default combineReducers({
    auth, jobs
});