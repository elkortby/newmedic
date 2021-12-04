import { StackNavigationProp } from '@react-navigation/stack'
import { RouteProp } from '@react-navigation/native'

export type HomeParamList = {
	Dashboard: undefined
	Settings: undefined
}

export type HomeNavProps<T extends keyof HomeParamList> = {
    navigation: StackNavigationProp<HomeParamList, T>
    route: RouteProp<HomeParamList, T>
} 