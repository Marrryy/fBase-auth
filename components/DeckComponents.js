import React , {Component} from 'react';
import { View, Text, AsyncStorage} from 'react-native';

class Home extends Component{
  static navigationOptions = {
    title:'Home'
  };  

  render(){	
    if(_.isNull(this.state.token)){
      return <AppLoading/>
    }
    return(
        <View style={{flex:1, alignContent:'center', justifyContent:'center'}}>
			<Text>DECK</Text>
	    </View>
    );
  }
}

export default Home;