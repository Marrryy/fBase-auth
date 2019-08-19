import React, { Component } from 'react';
import { View, Platform, StyleSheet } from 'react-native';
import { createStackNavigator, createDrawerNavigator, createBottomTabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Home from './HomeComponent';
import Sign from './SignComponents';
import AuthWithFacebook from './AuthWithFacebook';
import MapScreen from './MapComponents';
import Deck from './DeckComponents';
import Review from './ReviewComponents';
import Setting from './SettingComponent';


const HomeNavigator = createStackNavigator({
    Home: { screen: Home , 
      navigationOptions:({ navigation})=>({
        headerLeft: <Icon name="menu"
                    size={24}
                    color="white"
                    onPress={()=>navigation.toggleDrawer()}
        />
      }) },
  }, {
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
          backgroundColor: "#512DA8"
      },
      headerTitleStyle: {
          color: "#fff"            
      },
      headerTintColor: "#fff"  
    })
});

const ReviewNavigator = createStackNavigator({
  Review: { screen: Review },
  Setting: {screen: Setting}
});

const AuthNavigator = createStackNavigator({
  Auth: { screen: AuthWithFacebook, 
    navigationOptions:({ navigation})=>({
      headerLeft: <Icon name="menu"
                  size={24}
                  color="white"
                  onPress={()=>navigation.toggleDrawer()}
      />
    }) },
  Tab:{ screen: createBottomTabNavigator({  
      Map: MapScreen,
      Deck: Deck,
      Review: ReviewNavigator  
    }), 
    navigationOptions:{ 
      header: null
    },
    tabBarPosition:'bottom',
    swipeEnabled:false,
    tabBarOptions:{
      labelStyle:{ fontSize : 12},
      showIcon: true,
      showLabel: true
    }
  }
}, {
  navigationOptions: ({ navigation }) => ({
    headerStyle: {
        backgroundColor: "#512DA8"
    },
    headerTitleStyle: {
        color: "#fff"            
    },
    headerTintColor: "#fff"  
  })
});

const SignNavigator = createStackNavigator({
    Sign: { screen: Sign , 
      navigationOptions:({ navigation})=>({
        headerLeft: <Icon name="menu"
                    size={24}
                    color="white"
                    onPress={()=>navigation.toggleDrawer()}
        />
      }) },
  }, {
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
          backgroundColor: "#512DA8"
      },
      headerTitleStyle: {
          color: "#fff"            
      },
      headerTintColor: "#fff"  
    })
});

const MainNavigator = createDrawerNavigator({
    Home: 
      { screen: HomeNavigator,
        navigationOptions: {
          title: 'Home',
          drawerLabel: 'Home',
        }
      },
    Auth:
      { screen: AuthNavigator,
      navigationOptions: {
        title: 'Auth',
        drawerLabel: 'Auth',
      }
    },
    Sign: 
      { screen: SignNavigator,
        navigationOptions: {
          title: 'Sign',
          drawerLabel: 'Sign In/Up',
        }, 
      }
}, {
  initialRouteName:'Home',
  drawerBackgroundColor: '#D1C4E9',
  
  //using for load when visit the stack
  lazyLoad:true,
  
  // For disable visible of tabBar (if you use TabNavigator)
  // navigationOptions:{
  //   tabBar:{visible:false}
  // }
});

const style=StyleSheet.create({
  container:{
    flex:1,
  }, 
  drawerHeader: {
    backgroundColor: '#512DA8',
    height: 140,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row'
  },
  drawerHeaderText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold'
  },
  drawerImage: {
    margin: 10,
    width: 80,
    height: 60
  }
});

class Main extends Component{
  render(){
      return (
          <View style={{flex:1, paddingTop:Platform.OS=== 'ios' ? 0 : Expo.Constants.statusBarHeight}}>
              {/* <Text>JUST SLEEPING</Text> */}
              <MainNavigator/>
              
          </View>
      );
  }
}



export default Main;