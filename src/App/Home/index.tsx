import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import { HomeNavProps, HomeParamList } from '../../Params/HomeNavProps';
import Dashboard from './Dashboard';
import Certificate from './Dashboard/Certificate';
import List from './List';
import Patients from './Patients';

const Stack = createNativeStackNavigator<HomeParamList>();

export default function Home({navigation}: HomeNavProps<'Dashboard'>) {
	return (
		<Stack.Navigator
			initialRouteName="Dashboard"
			screenOptions={{
				header: () => null
			}}
		>
			<Stack.Screen name="Certificate" component={Certificate} />
			<Stack.Screen name="Patients" component={Patients} />
			<Stack.Screen name="Dashboard" component={Dashboard} />
			<Stack.Screen name="List" component={List} />
		</Stack.Navigator>
	)
}