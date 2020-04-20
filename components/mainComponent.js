import React, { Component } from 'react';
import Menu from './MenuComponent';
import AboutUs from './AboutComponent';
import Home from './HomeComponent';
import ContactUs from './ContactComponent';
import Dishdetail from './DishdetailComponent';
import { View, Platform } from 'react-native';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

const MenuNavigator = createStackNavigator({
    Menu: { screen: Menu },
    Dishdetail: { screen: Dishdetail }
},
{
    initialRouteName: 'Menu',
    navigationOptions: {
        headerStyle: {
            backgroundColor: "#512DA8"
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: "#fff"            
        }
    }
}
);

const HomeNavigator = createStackNavigator({
  Home: { screen: Home},
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

const AboutUsNavigator = createStackNavigator({
  AboutUs: { screen: AboutUs },
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
const ContactNavigator = createStackNavigator({
  ContactUs: { screen: ContactUs },
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
          drawerLabel: 'Home'
        },
      },
    AboutUs: 
      { screen: AboutUsNavigator,
        navigationOptions: {
          title: 'About Us',
          drawerLabel: 'About Us'
        }, 
      },  
    Menu: 
      { screen: MenuNavigator,
        navigationOptions: {
          title: 'Menu',
          drawerLabel: 'Menu'
        }, 
      },
    ContactUs:
      { screen : ContactNavigator,
        navigationOptions: {
          title: 'Contact Us',
          drawerLabel: 'Contact Us'
        },
      }  
}, {
  drawerBackgroundColor: '#D1C4E9'
});
class Main extends Component {
  

  render() {
 
    return (
        <View style={{flex:1}}>
              <MainNavigator />
        </View>
    );
  }
}
  
export default Main;