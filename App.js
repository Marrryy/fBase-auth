import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';

import firebase from 'firebase';
import SignUpComponents from'./components/SignUpComponents'; 
import SignInComponents from'./components/SignInComponents';

import store from './redux/index';

export default class App extends React.Component {
  componentDidMount() {
      // Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: "AIzaSyBQrz2x7UHJnxoXRhSgBXsSXyHN5jjA6E8",
      authDomain: "haaa-41acd.firebaseapp.com",
      databaseURL: "https://haaa-41acd.firebaseio.com",
      projectId: "haaa-41acd",
      storageBucket: "haaa-41acd.appspot.com",
      messagingSenderId: "885819314990",
      appId: "1:885819314990:web:882af9b8dabe666a"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
  render(){
    
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <SignUpComponents/>
        <Text>---------------------------</Text>
        <SignInComponents/>
      </View>
    </Provider>
  );
};
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
