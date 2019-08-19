import React , {Component} from 'react';
import { View, Text,Platform} from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Setting extends Component{
  static navigationOptions = {
    title:'Setting',
    // headerStyle:{
    //   marginTop: Platform.OS === 'android' ? 24:0 
    // }
  };  


  render(){
    return(
        <View style={{flex:1}}>
          <Button
          title="Reset Liked Jobs"
          large
          icon={{name: 'delete-forever'}}
          backgroundColor="#F44336"
          onPress={this.props.clearLikedJob }
          />

        </View>
    );
  }
}

export default connect(null, actions)(Setting);