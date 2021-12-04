import React, { useContext, useState } from 'react'
import { View } from 'react-native'
import AppButton from '../../Components/AppButton'
import AppText from '../../Components/AppText'
import AppTextInput from '../../Components/AppTextInput'
import AppView from '../../Components/AppView'
import { CabNavProps } from '../../Params/CabNavProps'
import { AuthContext } from '../../Providers/AuthProvider'
import { button } from '../../Styles/button'
import { input } from '../../Styles/input'
import { text } from '../../Styles/text'

export default function index({navigation}: CabNavProps<'Activate'>) {

	const {activate} = useContext(AuthContext)

	const [key1, setkey1] = useState("")
	const [key2, setkey2] = useState("")
	const [key3, setkey3] = useState("")
	const [key4, setkey4] = useState("")
	const [key5, setkey5] = useState("")
	
	return (
		<AppView>
			<View style={{
				width: "60%",
				marginBottom: 80,
			}}>
				<AppText style={text.h5} otherStyle={{ textAlign: 'center',  }}>يرجى ادخال رمز التفعيل</AppText>
				<View style={{
					marginTop: 40,
					flexDirection: 'row',
					justifyContent: 'space-between'
				}}>
					<AppTextInput 
						style={input.smallInputView} 
						shape={input.borderInput} 
						otherStyle={input.capitalize}
						onChangeText={setkey1}
						value={key1}
						maxLength={6}
					/>
					<AppTextInput 
						style={input.smallInputView} 
						shape={input.borderInput} 
						otherStyle={input.capitalize}
						onChangeText={setkey2}
						value={key2}
						maxLength={6}
					/>
					<AppTextInput 
						style={input.smallInputView} 
						shape={input.borderInput} 
						otherStyle={input.capitalize}
						onChangeText={setkey3}
						value={key3}
						maxLength={6}
					/>
					<AppTextInput 
						style={input.smallInputView} 
						shape={input.borderInput} 
						otherStyle={input.capitalize}
						onChangeText={setkey4}
						value={key4}
						maxLength={6}
					/>
					<AppTextInput 
						style={input.smallInputView} 
						shape={input.borderInput} 
						otherStyle={input.capitalize}
						onChangeText={setkey5}
						value={key5}
						maxLength={6}
					/>
				</View>
			</View>
			<View style={{ flexDirection: 'row', width: "40%", justifyContent: 'space-between' }}>
				<AppButton 
					style={button.buttonBorderView} 
					size={button.smallButton}
					onPress={() => {
						navigation.goBack()
					}}
				>
					<AppText style={text.h6} color='medic' >رجوع</AppText>
				</AppButton>
				<AppButton 
					style={button.buttonView} 
					size={button.smallButton}
					onPress={() => {
						activate(key1 + key2 + key3 + key4 + key5)
					}}
				>
					<AppText style={text.h6} color='white' >دخول</AppText>
				</AppButton>
			</View>
		</AppView>
	)
}
