import React , {Component} from 'react';
import { View, Text} from 'react-native';
import { Button, ThemeConsumer} from 'react-native-elements';

class Step extends Component{

  state= {
    num:1,
    desc:["Need","Amazing","Kawaii ?"]
  };
  
  handleClick= () => {
    if(this.state.num<3)
    {
      this.setState({num:this.state.num+1})
    }
    else this.goToCarousel()
  }

  goToCarousel = () => {
    this.props.navigation.navigate('Carousel');
  }


  render(){
    return(
      <View style={{flex:1,justifyContent:'space-between'}}>
        <Text style={{fontWeight: 'bold', fontSize: 30,}}>
          <Text>Step </Text>
          <Text>{this.state.num}</Text>
          <Text>/3</Text>
        </Text>

        <View style={{minHeight:250, backgroundColor:'powderblue',justifyContent:'center', alignItems:"center"}}>
          <Text style={{fontSize: 24}}>{this.state.desc[this.state.num-1]}</Text>
        </View>

        <View style={{flexDirection:"row",justifyContent:'space-between'}}>
          <Button
          title="Skip"
          onPress={()=>this.goToCarousel()}
          />
          <Button
          title="Next"
          onPress={()=> this.handleClick()}
          />
        </View>
      </View>
    );
  }
}

export default Step;