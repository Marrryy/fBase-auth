import React , {Component} from 'react';
import { View, StyleSheet, Text} from 'react-native';
import { Input, Icon } from 'react-native-elements';
import { createStackNavigator } from 'react-navigation';

class Pin extends Component{
  static navigationOptions = {
    title:'Pin'
  };  

  state= {
    input1:"",
    input2:"",
    input3:"",
    input4:"",
    input5:"",
    input6:"",
    star1:"",
    star2:"",
    star3:"",
    star4:"",
    star5:"",
    star6:""
  };

  render(){
    return(
        <View style={{flex:1, justifyContent: 'center', alignItems: "center", flexDirection:'row'}}
        >
            <Input 
              ref={(input) => { this.firstTextInput = input; }}
              value={this.state.star1}              
              onChangeText={(input)=>{
                input = String(input).replace(/[\D]/g, "")
                if(input.length>1){
                  input = input[input.length-1]
                }
                this.setState({input1: input})
                if(input==""){
                  this.setState({star1:""})
                }else{
                  this.setState({star1:"*"})
                  this.secondTextInput.focus();
                }

              }}
              keyboardType="numeric"
              blurOnSubmit={false}
              containerStyle={style.input}
              />

            <Input 
              ref={(input) => { this.secondTextInput = input; }}
              value={this.state.star2}
              
              onKeyPress={(what)=>{
                if(what.nativeEvent.key == "Backspace" && this.state.input2 == ""){
                  this.setState({input1:""})
                  this.setState({star1:""})
                  this.firstTextInput.focus();
                }
              }}

              onChangeText={(input)=>{
                input = String(input).replace(/[^\d]/g, "")
                if(input.length>1){
                  input = input[input.length-1]
                }
                this.setState({input2:input})
                if(input==""){
                  this.setState({star2:""})
                }else{
                  this.setState({star2:"*"})
                  this.thirdTextInput.focus();
                }

              }}
              keyboardType="numeric"
              blurOnSubmit={false}
              containerStyle={style.input}
            />

            <Input 
              ref={(input) => { this.thirdTextInput = input; }}

              value={this.state.star3}
              onKeyPress={(what)=>{
                if(what.nativeEvent.key == "Backspace" && this.state.input3 == ""){
                  this.setState({input2:""})
                  this.setState({star2:""})
                  this.secondTextInput.focus();
                }
              }}

              onChangeText={(input)=>{
                input = String(input).replace(/[^\d]/g, "")
                if(input.length>1){
                  input = input[input.length-1]
                }
                this.setState({input3:input})
                if(input==""){
                  this.setState({star3:""})
                }else{
                  this.setState({star3:"*"})
                  this.fourthTextInput.focus();
                }
                
              }}
              keyboardType="numeric"
              blurOnSubmit={false}
              containerStyle={style.input}
            />

            <Input 
              ref={(input) => { this.fourthTextInput = input; }}

              value={this.state.star4}
              onKeyPress={(what)=>{
                if(what.nativeEvent.key == "Backspace" && this.state.input4 == ""){
                  this.setState({input3:""})
                  this.setState({star3:""})
                  this.thirdTextInput.focus();
                }
              }}
              onChangeText={(input)=>{
                input = String(input).replace(/[^\d]/g, "")
                if(input.length>1){
                  input = input[input.length-1]
                }
                this.setState({input4:input})
                if(input==""){
                  this.setState({star4:""})
                }else{
                  this.setState({star4:"*"})
                  this.fifthTextInput.focus();
                }

              }}
              keyboardType="numeric"
              blurOnSubmit={false}
              containerStyle={style.input}
            />

            <Input 
              ref={(input) => { this.fifthTextInput = input; }}

              value={this.state.star5}
              onKeyPress={(what)=>{
                if(what.nativeEvent.key == "Backspace" && this.state.input5 == ""){
                  this.setState({input4:""})
                  this.setState({star4:""})
                  this.fourthTextInput.focus();
                }
              }}
              onChangeText={(input)=>{
                input = String(input).replace(/[^\d]/g, "")
                if(input.length>1){
                  input = input[input.length-1]
                }
                this.setState({input5:input})
                if(input==""){
                  this.setState({star5:""})
                }else{
                  this.setState({star5:"*"})
                  this.sixthTextInput.focus();
                }
                
              }}
              keyboardType="numeric"
              blurOnSubmit={false}
              containerStyle={style.input}
            />

            <Input 
              ref={(input) => { this.sixthTextInput = input; }}

              value={this.state.star6}
              onKeyPress={(what)=>{
                if(what.nativeEvent.key == "Backspace" && this.state.input6 == ""){
                  this.setState({input5:""})
                  this.setState({star5:""})
                  this.fifthTextInput.focus();
                }
              }}
              onChangeText={(input)=>{
                input = String(input).replace(/[^\d]/g, "")
                if(input.length>1){
                  input = input[input.length-1]
                }
                this.setState({input6:input})
                if(input==""){
                  this.setState({star6:""})
                }else{
                  this.setState({star6:"*"})
                    console.log(this.state)
                    this.props.navigation.navigate('Congrats');
                }

              }}
              keyboardType="numeric"
              blurOnSubmit={false}
              containerStyle={style.input}
            />

        </View>
    );
  }
}

class Congrats extends Component{
  render(){
    return(
      <View style={{flex:1, justifyContent: 'center', alignItems: "center", flexDirection:'row'}}>
        <Text> Congrats !!</Text>
      </View>
    );
  }
}

const style = StyleSheet.create({
  input:{
    borderWidth: 2,
    // borderColor:,  
    // backgroundColor:,  
    paddingLeft: 3,
    width: 50,
    height:200,
    alignItems:"center",
    justifyContent:"center",
    marginRight:3,
    // fontSize:18
  }
});

const PinNavigators = createStackNavigator({
  Pin: { screen: Pin , 
  navigationOptions:({ navigation})=>({
    headerLeft: <Icon name="menu"
                size={24}
                color="white"
                onPress={()=>navigation.toggleDrawer()}
    />
  }) },
  Congrats: {screen: Congrats}
});

export default PinNavigators;