import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import { AppNavProps } from '../../Params/AppNavProps'
import { HomeParamList } from '../../Params/HomeNavProps';
import Dashboard from '../Dashboard';

const Stack = createNativeStackNavigator<HomeParamList>();

export default function Home({navigation}: AppNavProps<'Dashboard'>) {
	return (
		<Stack.Navigator
			initialRouteName="Dashboard"
			screenOptions={{
				header: () => null
			}}
		>
			<Stack.Screen name="Dashboard" component={Dashboard} />
		</Stack.Navigator>
	)
}