import axios from 'axios';
import reverseGeocode from 'latlng-to-zip';
import qs from 'qs';
import data from '../shared/jobs.json';

import {
    FETCH_JOBS,
    LIKE_JOB,
    CLEAR_LIKED_JOB
} from './types';

const JOB_ROOT_URL = 'http://api.indeed.com/ads/apisearch?';

const JOB_QUERY_PARAMS ={
    // publisher: '4201738803816157',
    publisher: '',
    format:'json',
    v:'2',
    latlong:1,
    radius: 10,
    q : 'javascript'
};

const buildJobUrl = (zip) =>{
    const query = qs.stringify({...JOB_QUERY_PARAMS, l:zip});
    return `${JOB_ROOT_URL}${query}`;
};

export const fetchJobs = (region) => async dispatch => {
    try{
        console.log(region)

        //Can't Use this program because: 1. Google Cloud API won't give GeoCoding API. 2. Indeed not giving out their publisher Key
        // let zip = await reverseGeocode(region,'AIzaSyDNxfDF_AYx_Rm6ddH6R6H7kS9kjh4MBAg');
        // const url = buildJobUrl(zip);
        // let { data } =await axios.get(url);
        
        
        //cause i can't get anything from job action, i create a make up of jobs :)
        dispatch({ type:FETCH_JOBS, payload:data });
    }
    catch(e){
        console.error(e);
    }
};

export const likeJob = (job)  =>{
    return{
        payload: job,
        type:LIKE_JOB
    }
}

export const clearLikedJob = (job)  =>{
    return{
        type:CLEAR_LIKED_JOB
    }
}