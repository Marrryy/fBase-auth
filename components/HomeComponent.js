import _ from 'lodash';
import React , {Component} from 'react';
import { View, Text, AsyncStorage} from 'react-native';
import { AppLoading } from 'expo';

// const SLIDE_DATA = [
//   {text: 'Welcome to Home', color:'#03A9F4'},
//   {text: 'Yay', color:'#009688'}
// ];

class Home extends Component{
  state={ token:null }

  async componentWillMount(){
    let token = await AsyncStorage.getItem('fb_token')

    if(token){
    //this.props.navigation.navigate('Auth');
    this.setState({ token})
      
  }else{
    this.setState({ token:false })
    }
  }

  static navigationOptions = {
    title:'Home'
  };  

  // onSlideComplete = ()=>{
  //   this.props.navigation.navigate('');
  // }

  render(){	
    if(_.isNull(this.state.token)){
      return <AppLoading/>
    }
    return(
      // <Slides data={SLIDE_DATA} onComplete={this.onSlideComplete}/>
      <View style={{flex:1, alignContent:'center', justifyContent:'center'}}>
				<Text>This is Home. Hi !! Please draw the Drawer for more information</Text>
			</View>
    );
  }
}

export default Home;