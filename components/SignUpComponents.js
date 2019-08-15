import React , { Component } from 'react';
import { Text, View } from 'react-native';
import { Input,Button} from 'react-native-elements';
import axios from 'axios';


const ROOT_URL = 'https://us-central1-haaa-41acd.cloudfunctions.net';

class SignUp extends Component {
	constructor(props){
		super(props);
		this.state = { phone:'' };
	};
	//using handleSubmit(){} will going to use this.handleSubmit.bind(this)
	handleSubmit = async () => {
		try{
			await axios.post(ROOT_URL+'/createUser',{ phone: this.state.phone });
			const mess = await axios.post(ROOT_URL+'/requestOneTimePasswords',{ phone:this.state.phone });
			if(mess){
				console.log(mess.data.message)
			}
		}catch(err){
			console.log(err);
		}
	}

	render(){
		return(	
			<View>
				<Text>Sign Up</Text>
				<View>
					<Text>Enter Your Phone Number </Text>
					<Input placeholder='Phone Number'
									onChangeText={(phone)=>this.setState({phone})}
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

export default SignUp;