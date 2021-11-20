import { StackNavigationProp } from '@react-navigation/stack'
import { RouteProp } from '@react-navigation/native'

export type CabParamList = {
	Welcome: undefined
	Activate: undefined
	CreateUsers: undefined
}

export type CabNavProps<T extends keyof CabParamList> = {
    navigation: StackNavigationProp<CabParamList, T>
    route: RouteProp<CabParamList, T>
} 