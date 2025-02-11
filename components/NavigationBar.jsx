import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import About from './About';


const Tab = createBottomTabNavigator();

const NavigationBar = () => {
  return (
    <Tab.Navigator
    tabBarOptions={{
      showLabel: false,
      style:{
        backgroundColor:'#000',
        position: 'absolute',
        
      }
    }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="About" component={About} />
    </Tab.Navigator>
  );
};

export default NavigationBar;
