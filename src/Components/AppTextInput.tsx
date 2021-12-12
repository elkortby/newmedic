import React from 'react'
import { TextInput } from 'react-native'

type Props = {
	style: any
	onChangeText?: any
	value?: string
	placeholder?: string	
	shape: any
	otherStyle?: any
	maxLength?: number
	password?: boolean
	ref?: any
}

export default function AppTextInput(
	{	style, 
		onChangeText, 
		value, 
		placeholder, 
		shape, 
		otherStyle, 
		maxLength,
		password,
		ref
	}
: Props ) {
	return (
		<TextInput 
			style={[style, shape, otherStyle]}
			onChangeText={onChangeText}
			value={value}
			placeholder={placeholder}
			maxLength={maxLength}
			secureTextEntry={password}
			ref={ref}
		/>
	)
}
