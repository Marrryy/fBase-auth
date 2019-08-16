import React , {Component} from 'react';
import { View, Text} from 'react-native';

class Review extends Component{

  render(){	
    return(
        <View style={{flex:1, alignContent:'center', justifyContent:'center'}}>
			<Text>Review</Text>
			<Text>Review</Text>
			<Text>Review</Text>
		</View>
    );
  }
}

export default Review;