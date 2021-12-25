import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../App/Home';
import Settings from '../App/Settings';
import { AppParamList } from '../Params/AppNavProps';
import { Platform, View } from 'react-native';
import AppText from '../Components/AppText';
import { Ionicons } from '@expo/vector-icons';
import { text } from '../Styles/text';
import Visit from '../App/Visit';
import History from '../App/History';

const Tabs = createBottomTabNavigator<AppParamList>();

const TabText = ({routeName}: any) => <View style={{ justifyContent: 'center', marginBottom: 10}}>
    <AppText style={text.h5} color="medic">{routeName}</AppText>
</View>

export default function AppTabs() {
  return (
    <NavigationContainer>
		<Tabs.Navigator 
            initialRouteName="Dashboard"
			screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size, focused }) => {
                    switch (route.name) {
                        case "Settings": return !focused && <Ionicons name="archive-outline" size={size} color={color} />;
                        case "History": return !focused && <Ionicons name="archive-outline" size={size} color={color} />;
                        case "Visit": return !focused && <Ionicons name="file-tray-stacked-outline" size={size} color={color} />;
                        case "Dashboard": return !focused && <Ionicons name="apps" size={size} color={color} />;
                    }
                },
                tabBarLabel: ({ focused }) => {
                    switch (route.name) {
                        case "Settings": return focused && <TabText routeName={route.name} />
                        case "History": return focused && <TabText routeName={route.name} />
                        case "Visit": return focused && <TabText routeName={route.name} />
                        case "Dashboard": return focused && <TabText routeName={route.name} />
                    }
                },
                tabBarActiveTintColor: "#42BFDD",
                tabBarInactiveTintColor: "black",
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 10,
                    left: 10,
                    right: 10,
                    height: 60,
                    borderRadius: 10,
                    paddingTop: Platform.OS !== "web" ? 10 : 0,
                    elevation: 10,
                    shadowRadius: 10,
                    shadowOpacity: 0.3,
                    shadowOffset: {
                        width: 0,
                        height: 5
                    }
                },
                headerShown: false
            })}
		>
			<Tabs.Screen name="Settings" component={Settings} />
			<Tabs.Screen name="History" component={History} />
			<Tabs.Screen name="Visit" component={Visit} />
			<Tabs.Screen name="Dashboard" component={Home} />
		</Tabs.Navigator>
	</NavigationContainer>
  );
}