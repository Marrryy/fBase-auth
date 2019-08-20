import React , {Component} from 'react';
import { View, Text,Platform} from 'react-native';
import { Button } from 'react-native-elements';
import Messageee from '../services/Message';

class Message extends Component{
    componentDidMount(){
        Messageee();
    }
  render(){
    return(
        <View style={{flex:1}}>
            <Text>Check Your Notifications Bar</Text>
        </View>
    );
  }
}

export default Message;