import React from 'react'
import { FlatList, View } from 'react-native'
import AppText from '../../Components/AppText'
import { text } from '../../Styles/text'
import PatientFromList from './PatientFromList'
import { data } from './PatientsData'

export default function Patients({navigation}) {
	return (
		<View>
			<AppText style={text.h3} color='blue' otherStyle={{ textAlign: 'center' }} >Liste des Patients</AppText>
			<View style={{
				width: '80%',
				flexDirection: 'row',
				justifyContent: 'space-between',
				alignSelf: 'center'
			}}>
				<AppText style={text.h6} color="black" otherStyle={{ width: '50%' }}>Nom et Prenom</AppText>
				<AppText style={text.h6} color="black" otherStyle={{ width: '20%' }}>Age</AppText>
				<AppText style={text.h6} color="black" otherStyle={{ width: '30%' }}>Telephone</AppText>
			</View>
			<FlatList 
				style={{ width: '80%', alignSelf: 'center' }}
				renderItem={(item) => <PatientFromList item={item.item} navigation={navigation} />}
				data={data}
				keyExtractor={item => item.N.toString()}
			/>
		</View>
	)
}
