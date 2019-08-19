import _ from 'lodash';
import {
  LIKE_JOB,
  CLEAR_LIKED_JOB
} from '../actions/types';

export default function(state = [], action){
  switch (action.type){
    // Can't use Rehydrate cause version of react persist >5
    // case REHYDRATE:
    //   return action.payload.likedJobs || [];
    case CLEAR_LIKED_JOB :
      return [];
    case LIKE_JOB :
      return _.uniqBy([
        action.payload, ...state
      ], 'jobkey');
    default:
      return state;
  }
}