import React , {Component} from 'react';
import { Input , Button} from 'react-native-elements';
import { View, Text } from 'react-native';
import axios from 'axios';
import firebase from 'firebase';

const ROOT_URL = 'https://us-central1-haaa-41acd.cloudfunctions.net';


class SignInComponents extends Component{
	constructor(props){
		super(props);
		this.state = { 
			phone:'',
			code:'' 
		};
	};

	handleSubmit = async () => {
		try{
			let { data } = await axios.post(ROOT_URL+'/verifyOneTimePasswords',{
				phone:this.state.phone, code:this.state.code
      });
      
			console.log(resp.data.token);				
			firebase.auth().signInWithCustomToken(data.token);  

		}catch (err){
			console.log(err);
		}
	};
  render(){	
    return(
      <View>
				<Text>Sign In</Text>
				<View>
					<Text>Enter Your Phone Number </Text>
					<Input placeholder='Phone Number'
									onChangeText={(phone)=>this.setState({phone})}
									/>	
				</View>
				<View>
					
				<Text> Enter Code  </Text>
				<Input placeholder='Code'
								onChangeText={(code)=>this.setState({code})}
								/>
				</View>
				<Button
					title="Submit"
					onPress={this.handleSubmit}
					/> 
			</View>
    );
  }
}

export default SignInComponents;