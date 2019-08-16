//This course is from 040 - 072
import React , {Component} from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';

import SignUp from'./SignUpComponents'; 
import SignIn from'./SignInComponents';

class Sign extends Component{
  static navigationOptions = {
    title:'Sign In / Up'
  };

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
        <View style={{flex:1, alignConten:"center", justifyContent:'space-around'}}>
          <SignUp/>
          <Text>---------------</Text>
          <SignIn/>
        </View>
      );
  }
}

export default Sign;