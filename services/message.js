import Expo from 'expo-server-sdk';
import { AsyncStorage } from 'react-native';

export default async () => {

    try{
        // Create a new Expo SDK client
        let expo = new Expo();
        let pushToken = await AsyncStorage.getItem('pushtoken');

        // Create the messages that you want to send to clents
        let messages = {
            to: pushToken,
            sound: 'default',
            body: 'This is a test notification',
            data: { withSome: 'data' },
        }

        // The Expo push notification service accepts batches of notifications so
        // that you don't need to send 1000 requests to send 1000 notifications. We
        // recommend you batch your notifications to reduce the number of requests
        // and to compress them (notifications with similar content will get
        // compressed).
        let chunks = expo.chunkPushNotifications(messages);
        let ticketChunk = await expo.sendPushNotificationsAsync(chunks);
        console.log(ticketChunk);
        }catch(err){
            console.log(err)
        } 

};