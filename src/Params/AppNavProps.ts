import { StackNavigationProp } from '@react-navigation/stack'
import { RouteProp } from '@react-navigation/native'

export type AppParamList = {
	Dashboard: undefined
	History: undefined
	Visit: undefined
	Settings: undefined
}

export type AppNavProps<T extends keyof AppParamList> = {
    navigation: StackNavigationProp<AppParamList, T>
    route: RouteProp<AppParamList, T>
} 