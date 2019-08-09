import react, { Components } from 'react';
import { View, Text } from 'react-native';
import { FormLabel,FormInput, Button } from 'react-native-elements';
import axios from 'axios';


const ROOT_URL = 'https://us-central1-haaa-41acd.cloudfunctions.net';

class SignUpForm extends Components {
	state = { phone:'' };

	//using handleSubmit(){} will going to use this.handleSubmit.bind(this)
	handleSubmit = async () => {
		try{
			await axios.post('${ROOT_URL}/createUser',{ phone: this.state.phone });
			await axios.post('${ROOT_URL}/requestOneTimePasswords',{ phone:this.state.phone });
		}catch(err){
			console.log(err);			

		}
	}

	render(){
		return(
			<View>
				<View style={{marginBottom:10}}>
					<FormLabel>Enter Your Phone Number</FormLabel>
					<FormInput/>
				</View>
				<Button
				 title="Submit"
				 onPress={this.handleSubmit}
				 />
			</View>
		);
	}
}

export default SignUpForm