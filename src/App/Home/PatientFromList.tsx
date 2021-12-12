import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import AppText from '../../Components/AppText'
import { text } from '../../Styles/text'

export default function PatientFromList({item, navigation}) {
	return (
		<TouchableOpacity 
			onPress={() => navigation.navigate('Dashboard')}
		style={{
			width: '100%',
			flexDirection: 'row',
			justifyContent: 'space-between',
			borderTopWidth: 1,
		}}>
			<AppText style={text.p} color="black" otherStyle={{ width: '50%' }}>{item.fullName}</AppText>
			<AppText style={text.p} color="black" otherStyle={{ width: '20%' }}>{item.age}</AppText>
			<AppText style={text.p} color="black" otherStyle={{ width: '30%' }}>{item.phone}</AppText>
		</TouchableOpacity>
	)
}
