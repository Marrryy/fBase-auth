import react, { Components } from 'react';
import { View, Text } from 'react-native';
import { FormLabel,FormInput, Button } from 'react-native-elements';

class SignUpForm extends Components {
	render(){
		return(
			<View>
				<View style={{marginBottom:10}}>
					<FormLabel>Enter Your Phone Number</FormLabel>
					<FormInput/>
				</View>
				<Button title="Submit"/>
			</View>
		);
	}
}

export default SignUpForm