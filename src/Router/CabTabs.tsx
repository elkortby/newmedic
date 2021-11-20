import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from '../Cab/Welcome';
import CreateUsers from '../Cab/CreateUsers';
import Activate from '../Cab/Activate';

const Stack = createNativeStackNavigator();

export default function CabTabs() {
  return (
    <NavigationContainer>
		<Stack.Navigator
			initialRouteName="Welcome"
			screenOptions={{
                header: () => null
            }}
		>
				<Stack.Screen
					name="Welcome"
					component={Welcome}
				/>
				<Stack.Screen
					name="Activate"
					component={Activate}
				/>
				<Stack.Screen
					name="CreateUsers"
					component={CreateUsers}
				/>
		</Stack.Navigator>
    </NavigationContainer>
  );
}