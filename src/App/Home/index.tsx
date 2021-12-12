import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import { AppNavProps } from '../../Params/AppNavProps'
import { HomeParamList } from '../../Params/HomeNavProps';
import Dashboard from './Home';
import Patients from './Patients';

const Stack = createNativeStackNavigator<HomeParamList>();

export default function Home({navigation}: AppNavProps<'Dashboard'>) {
	return (
		<Stack.Navigator
			initialRouteName="Patients"
			screenOptions={{
				header: () => null
			}}
		>
			<Stack.Screen name="Patients" component={Patients} />
			<Stack.Screen name="Dashboard" component={Dashboard} />
		</Stack.Navigator>
	)
}