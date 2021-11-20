import React from 'react'
import { TextInput } from 'react-native'

type Props = {
	style: any
	onChangeText: any
	value: string
	placeholder?: string	
	shape: any
	otherStyle?: any
	maxLength?: number
}

export default function AppTextInput(
	{style, onChangeText, value, placeholder, shape, otherStyle, maxLength}: Props
) {
	return (
		<TextInput 
			style={[style, shape, otherStyle]}
			onChangeText={onChangeText}
			value={value}
			placeholder={placeholder}
			maxLength={maxLength}
		/>
	)
}
