import { AsyncStorage } from 'react-native';
import * as Facebook from 'expo-facebook'

import {
    FACEBOOK_LOGIN_SUCCESS,
    FACEBOOK_LOGIN_FAIL
} from './types';

// How to use AsyncStorage
// AsyncStorage.setItem('fb_token',token);
// AsyncStorage.getItem('fb_token');

// normally will be () => {return async(dispatch){...}}

//Action Creators must be 2 func
export const facebookLogin = () => async dispatch =>{
  const token = await AsyncStorage.getItem('fb_token');
 
  if(token){
    //Dispatch an action saying FB login is done
    dispatch({ type:FACEBOOK_LOGIN_SUCCESS , payload:token });
  
  } else{  
    //Start Up FB login process
    doFacebookLogin(dispatch);
  }

};


const doFacebookLogin = async dispatch =>{
  //let {type, token} = await Facebook.logInWithReadPermissionsAsync('492438284668921', {
  let res = await Facebook.logInWithReadPermissionsAsync('492438284668921', {
    permissions: ['public_profile']
  });
 
  if(res.type === 'cancel'){
    return dispatch({ type:FACEBOOK_LOGIN_FAIL })
  } 

  await AsyncStorage.setItem('fb_token', res.token);
  dispatch({ type:FACEBOOK_LOGIN_SUCCESS , payload:res.token });

};