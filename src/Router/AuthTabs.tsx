import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../Auth/Login';
import { AuthParamList } from '../Params/AuthNavProps';

const Stack = createNativeStackNavigator<AuthParamList>();

export default function CabTabs() {
  return (
    <NavigationContainer>
		<Stack.Navigator
			initialRouteName="Login"
			screenOptions={{
                header: () => null
            }}
		>
			<Stack.Screen
				name="Login"
				component={Login}
			/>
		</Stack.Navigator>
    </NavigationContainer>
  );
}