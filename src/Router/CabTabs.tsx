import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from '../Cab/Welcome';
import CreateUsers from '../Cab/CreateUsers';

const Stack = createNativeStackNavigator();

export default function CabTabs() {
  return (
    <NavigationContainer>
		<Stack.Navigator
			initialRouteName="Welcome"
		>
				<Stack.Screen
					name="Welcome"
					component={Welcome}
				/>
				<Stack.Screen
					name="CreateUsers"
					component={CreateUsers}
				/>
		</Stack.Navigator>
    </NavigationContainer>
  );
}