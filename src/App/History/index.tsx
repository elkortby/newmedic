import React from 'react'
import { View, Text } from 'react-native'
import AppText from '../../Components/AppText'
import AppView from '../../Components/AppView'
import { text } from '../../Styles/text'

export default function History() {
	return (
		<AppView>
			<AppText style={text.h2} color="medic" >History Page Component</AppText>
		</AppView>
	)
}