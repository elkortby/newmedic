import React from 'react'
import { View, Text } from 'react-native'
import { styles } from '../Styles/style'

export default function AppView({children} : { children: JSX.Element | JSX.Element[] }) {
	return (
		<View style={styles.centerPage}>
			{children}
		</View>
	)
}
