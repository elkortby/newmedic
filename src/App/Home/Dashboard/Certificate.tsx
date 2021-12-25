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
	const nameref = useRef("")
	const ageref = useRef("")

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

	const handleCreate = async () => {
		// const data = {
		// 	name: nameref.current,
		// 	age: ageref.current,
		// 	medics: items,
		// }
		if (Platform.OS === "web") {
			const pW = window.open('', '', 'height=500, width=500')
			pW?.document.write(html)
			pW?.document.close()
			pW?.print()
		} else {
			const uri = await Print.printToFileAsync({
				height: 792 / 2,
				width: 612 / 2,
				html: html
			})
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
					ref={nameref}
					placeholder="Nom et Prenom"
				/>
				<AppTextInput 
					style={input.inputView} 
					shape={input.borderInput} 
					otherStyle={input.capitalize}
					ref={ageref}
					placeholder="Age"
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
