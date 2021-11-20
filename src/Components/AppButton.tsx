import React from 'react'
import { GestureResponderEvent, TouchableOpacity } from 'react-native'
import AppText from './AppText'

export default function AppButton({children, style, size, otherStyle, onPress} 
	: { children: JSX.Element, style: any, size: any, otherStyle?: any, onPress?: ((event: GestureResponderEvent) => void) | undefined }) {
	return (
		<TouchableOpacity 
			style={[style, size, otherStyle]}
			onPress={onPress}
		>
			{children}
		</TouchableOpacity>
	)
}
