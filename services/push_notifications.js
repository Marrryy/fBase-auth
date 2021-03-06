import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';
import { AsyncStorage } from 'react-native';
import axios from 'axios';

const PUSH_ENDPOINT ="http://rallycoding.herokuapp.com/api/tokens";

export default async () => {
  try{
    let previousToken = await AsyncStorage.getItem('pushtoken');
    console.log(previousToken)
  
    if(previousToken){
      return;
    } else{

      let { status  } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      
      if(status !== 'granted'){ 
          return ;
      }

      // you must login into expo to use getExpoPushTokenAsync!!! expo login in cmd
      let token = await Notifications.getExpoPushTokenAsync();
      console.log(token)

      // can't post in this endpoint
      // let res = await axios.post(PUSH_ENDPOINT, { token: { token } });

      AsyncStorage.setItem('pushtoken', token);

    }
  console.log("Use this for testing Notification  https://expo.io/dashboard/notifications")
  }catch(err){
    console.log(err)
  }

};