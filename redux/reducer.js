import { combineReducers } from 'redux';
import auth from './auth_reducer';
import jobs from './jobs_reduces';
import likedJobs from './likes_reducer';

export default combineReducers({
    auth, jobs, likedJobs
});