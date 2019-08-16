import React , {Component} from 'react';
import { View, Text} from 'react-native';

class Setting extends Component{
  static navigationOptions = {
    title:'Setting'
  };  


  render(){	
    return(
        <View style={{flex:1, alignContent:'center', justifyContent:'center'}}>
			<Text>Setting</Text>
			<Text>Setting</Text>
			<Text>Setting</Text>
		</View>
    );
  }
}

export default Setting;