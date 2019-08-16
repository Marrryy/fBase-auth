//This course is from 091 -101
import React, { Component } from 'react';
import {View, Text, AsyncStorage} from 'react-native';
import { connect } from 'react-redux'; 
import * as actions from '../actions'; 

class AuthWithFacebook extends Component{
  
  static navigationOptions = {
    title:'Auth With Fb'
  };

  componentDidMount(){
    this.props.facebookLogin(); 
    // AsyncStorage.removeItem('fb_token');
    this.onAuthComplete(this.props);
  }

  //rerender
  componentWillReceiveProps(nextProps){
    this.onAuthComplete(nextProps);
  }

  onAuthComplete(props){
    if(props.token){
      this.props.navigation.navigate('Tab');
    }
  }

  render(){
    return(
      <View>
        <Text>Auth </Text>
        <Text>Auth </Text>
        <Text>Auth </Text>
        <Text>Auth </Text>
        <Text>Auth </Text>
      </View>
    );
  }
}

function mapStateToProps({auth}){
  return { token : auth.token }
}

export default connect(mapStateToProps, actions)(AuthWithFacebook);