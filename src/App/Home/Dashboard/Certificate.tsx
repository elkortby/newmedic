import { Ionicons } from '@expo/vector-icons'
import React, { useRef, useState } from 'react'
import { View, Text, FlatList, TouchableOpacity, Platform } from 'react-native'
import AppButton from '../../../Components/AppButton'
import AppText from '../../../Components/AppText'
import AppTextInput from '../../../Components/AppTextInput'
import { button } from '../../../Styles/button'
import { input } from '../../../Styles/input'
import { styles } from '../../../Styles/style'
import { text } from '../../../Styles/text'
import Items from './Items'
import * as Print from 'expo-print';
import { html } from './cert'

// const initialState = useState({
// 	name: 'Oussama Benkortbi',
// 	age: 24
// })
export default function Certificate() {
	const [name, setname] = useState("")
	const [age, setage] = useState("")

	const [items, setItems] = useState<[{
		medic: string
		dose: string
		type: string
	}]>([{
		medic: "paracetamol",
		dose: "3 pj",
		type: "comprime",
	}])

	const addItem = () => {
		setItems(oldItems => {
			oldItems.push({
				medic: "paracetamol",
				dose: "3 pj",
				type: "comprime",
			})
			return [...oldItems]
		})
	}

	const checkInput = (text: string, setter: (e: string) => void) => {
		let newText = '';
		let numbers = '0123456789';
	
		for (var i=0; i < text.length; i++) {
			if(numbers.indexOf(text[i]) > -1 ) {
				newText = newText + text[i];
			}
			else {
				// your call back function
				alert("please enter numbers only");
			}
		}
		if (parseInt(newText) < 120) {
			setage(newText)
		}
	}

	const handleCreate = async () => {
		if (Platform.OS === "web") {
			const pr = window.open('', '', 'height=792, width=612')
			pr?.focus()
			pr?.document.write(html(name, age))
			pr?.print()
			pr?.close()
		} else {
			// const uri = await Print.printToFileAsync({
			// 	height: 792 / 2,
			// 	width: 612 / 2,
			// 	html: html
			// })
			// File
		}
	}

	return (
		<View style={{
			justifyContent: 'space-around',
			alignItems: 'center',
		}}>
			<View style={{
				width: '60%',
				justifyContent: 'space-between',
				flexDirection: 'row',
				marginTop: 40
			}}>
				<AppTextInput 
					style={input.inputView} 
					shape={input.borderInput} 
					otherStyle={input.capitalize}
					value={name}
					onChangeText={setname}
					placeholder="Nom et Prenom"
				/>
				<AppTextInput 
					style={input.inputView} 
					shape={input.borderInput} 
					otherStyle={input.capitalize}
					value={age}
					onChangeText={checkInput}
					placeholder="Age"
					maxLength={3}
				/>
			</View>
			<View style={{ width: '60%'}}>
				<View style={styles.row}>
					<View style={[styles.row, { width: '20%' }]}>
						<AppText style={text.h5} color="black">Items</AppText>
						<TouchableOpacity onPress={addItem}>
							<Ionicons name="add-circle" color="#42BFDD" size={24} style={{ marginTop: 5 }} />
						</TouchableOpacity>
					</View>
					<View style={{ width: "80%" }}></View>
				</View>
			</View>
			<FlatList 
				style={{
					width: '60%',
				}}
				data={items}
				renderItem={Items}
				keyExtractor={item => item.toString()}
			/>
			<View style={{ flexDirection: 'row', width: "40%", justifyContent: 'space-between', alignSelf: 'center', marginTop: 40 }}>
				<AppButton 
					style={button.buttonBorderView} 
					size={button.smallButton}
					onPress={handleCreate}
				>
					<AppText style={text.h6} color='medic' >Cree</AppText>
				</AppButton>
				<AppButton 
					style={button.buttonView} 
					size={button.smallButton}
					onPress={() => {
						
					}}
				>
					<AppText style={text.h6} color='white' >Annuler</AppText>
				</AppButton>
			</View>
		</View>
	)
}
