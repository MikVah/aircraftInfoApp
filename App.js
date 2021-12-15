import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles/Styles';

import Home from './screens/HomeSearch';
import History from './screens/History';


const Tab = createBottomTabNavigator();

export default function App() {
  return (

    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {

            let iconName;

            if (route.name === 'Home') {
              iconName = 'md-home';
            } else if (route.name === 'History') {
              iconName = 'md-time';
            } 

            return <Ionicons name={iconName} size={size} color={'white'} />
          },

          tabBarActiveBackgroundColor: '#1c0bc2',
          tabBarInactiveBackgroundColor: '#35b0ff'
          
          
        })}>
        <Tab.Screen name="Home" component={Home} options={{ headerStyle: { backgroundColor: '#0095ff' }}}/>
        <Tab.Screen name="History" component={History}  options={{ headerStyle: { backgroundColor: '#0095ff' }}}/>
        

      </Tab.Navigator>
    </NavigationContainer>
  )
}