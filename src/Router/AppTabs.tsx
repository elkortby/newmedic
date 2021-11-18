import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../App/Home';
import Settings from '../App/Settings';
import Dashboard from '../App/Dashboard';

const Stack = createNativeStackNavigator();

export default function AppTabs() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
			<Stack.Screen
				name="Home"
				component={Home}
			/>
			<Stack.Screen
				name="Settings"
				component={Settings}
			/>
			<Stack.Screen
				name="Dashboard"
				component={Dashboard}
			/>
	  </Stack.Navigator>
    </NavigationContainer>
  );
}