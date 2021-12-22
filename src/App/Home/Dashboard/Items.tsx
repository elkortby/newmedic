import React, { useState } from 'react'
import { View } from 'react-native'
import AppTextInput from '../../../Components/AppTextInput'
import { input } from '../../../Styles/input'

export default function ItemsData() {
	return <Items />
}

const Items = () => {

	const [Medic, setMedic] = useState("")
	const [Dose, setDose] = useState("")
	const [Type, setType] = useState("")	
	
	return (
		<View style={{
			justifyContent: 'space-between',
			flexDirection: 'row',
			marginTop: 10
		}}>
			<AppTextInput 
				style={input.longInput} 
				shape={input.borderInput} 
				value={Medic}
				onChangeText={setMedic}
				placeholder="Medicament"
			/>
			<AppTextInput 
				style={input.smallInputView} 
				shape={input.borderInput} 
				otherStyle={input.capitalize}
				value={Dose}
				onChangeText={setDose}
				placeholder="Dose"
			/>
			<AppTextInput 
				style={input.smallInputView} 
				shape={input.borderInput} 
				otherStyle={input.capitalize}
				value={Type}
				onChangeText={setType}
				placeholder="Type"
			/>
		</View>
	)
}