import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles/Styles';

import Home from './screens/HomeSearch';
import History from './screens/SearchHistory';
import Favorite from './screens/Favorites';
import FlightInfo from './screens/Flight';

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
            } else if (route.name === 'Favorites') {
              iconName = 'md-heart';
            } else if (route.name === 'Flight') {
              iconName = 'md-time';
            }

            return <Ionicons name={iconName} size={size} color={'white'} />
          },

          tabBarActiveBackgroundColor: '#1c0bc2',
          tabBarInactiveBackgroundColor: '#35b0ff'
          
          
        })}>
        <Tab.Screen name="Home" component={Home} options={{ headerStyle: { backgroundColor: 'blue' }}}/>
        <Tab.Screen name="Flight" component={FlightInfo} />
        <Tab.Screen name="Favorites" component={Favorite}/>

      </Tab.Navigator>
    </NavigationContainer>
  )
}