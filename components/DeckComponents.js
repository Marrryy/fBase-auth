//Course from 114 - 123
import React , {Component} from 'react';
import { View, Text, Platform} from 'react-native';
import { connect } from 'react-redux';
import MapView from 'react-native-maps';
import { Card, Button, Icon } from 'react-native-elements';
import Swipe from './Swipe';
import * as actions from '../actions';

class Deck extends Component{
  static navigationOptions = {
    title:'Jobs',
    tabBarIcon:({ tintColor }) => {
      return <Icon 
              name="description"
              size={30}
              color={tintColor}
              />
    }
  };  
  
  renderCard(job){
    const initialRegion ={
      longitude: job.longitude,
      latitude : job.latitude,
      longitudeDelta: 0.045,
      latitudeDelta : 0.02 
    }

    console.log()
    return(
      <Card title={job.jobtitles} >
        <View style={{ height: 300 }}>
          <MapView
          scrollEnabled={ false }
          style={{ flex: 1 }}
          cacheEnabled={ Platform.OS === 'android' ? true : false } //detailed of map
          initialRegion={ initialRegion }
          >
          </MapView>
        </View>
        
        <View style={ styles.detailWrapper } >
          <Text>{ job.company }</Text>
          <Text>{ job.formattedRelativeTime }</Text>
        </View>
        
        <Text> 
          { job.snippet.replace(/<b>/g, '').replace(/<\/b>/g,'') }
        </Text>
      </Card>
    );
  }

  renderNoMoreCards= ()=>{
    return(
      <Card title="No More Jobs">
        <Button
        title="Back to Map"
        large
        icon={{name:'my-location'}}
        backgroundColor="#03A9F4"
        onPress= {() => this.props.navigation.navigate("Map")}
        />
      </Card>
    );
  }

  render(){	
    return(
      <View style={{marginTop:10}}>
        <Swipe 
        data={this.props.jobs}
        renderCard={this.renderCard}
        renderNoMoreCards={this.renderNoMoreCards.bind(this)}
        onSwipeRight={job => this.props.likeJob(job)}
        keyProp="jobkey"
        /> 
      </View>
    );
  }
}

const styles={
  detailWrapper:{
    flexDirection : "row", //inline
    justifyContent: "space-around",
    marginBottom:10
  }
}

function mapStateToProps({ jobs }){
  return { jobs: jobs.results }
}

export default connect(mapStateToProps, actions)(Deck);