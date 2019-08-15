import axios from 'axios';
import reverseGeocode from 'latlng-to-zip';
import qs from 'qs';

import {
    FETCH_JOBS
} from './types';

const JOB_ROOT_URL = 'http://api.indeed.com/ads/apisearch?';

const JOB_QUERY_PARAMS ={
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
        // dispatch({ type:FETCH_JOBS, payload:data });
    }
    catch(e){
        console.error(e);
    }
};