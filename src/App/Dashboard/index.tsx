import React from 'react'
import { View, Text } from 'react-native'
import AppText from '../../Components/AppText'
import AppView from '../../Components/AppView'
import { text } from '../../Styles/text'

export default function index() {
	return (
		<AppView>
			<AppText style={text.h2} color="medic" >Dashboard</AppText>
		</AppView>
	)
}
