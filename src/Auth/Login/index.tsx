import React, { useContext, useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import WelcomeText from '../../Cab/Welcome/WelcomeText'
import AppButton from '../../Components/AppButton'
import AppText from '../../Components/AppText'
import AppTextInput from '../../Components/AppTextInput'
import AppView from '../../Components/AppView'
import { AuthNavProps } from '../../Params/AuthNavProps'
import { AuthContext } from '../../Providers/AuthProvider'
import { button } from '../../Styles/button'
import { input } from '../../Styles/input'
import { styles } from '../../Styles/style'
import { text } from '../../Styles/text'

export default function index({navigation}: AuthNavProps<'Login'>) {

	const {login, error} = useContext(AuthContext)

	const [username, setusername] = useState("")
	const [password, setpassword] = useState("")

	return (
		<AppView>
			<View style={styles.card}>
				<AppTextInput
					style={input.inputView}
					onChangeText={setusername}
					value={username}
					placeholder="إسم المستخدم"
					shape={input.borderInput} 
					otherStyle={{ textAlign: 'right', padding: 10 }}
				/>
				<AppTextInput
					style={input.inputView}
					onChangeText={setpassword}
					value={password}
					placeholder="كلمة المرور"
					shape={input.borderInput} 
					otherStyle={{ marginTop: 20, textAlign: 'right', padding: 10 }}
					password
				/>
				<AppButton 
					style={button.buttonView} 
					size={button.smallButton}
					otherStyle={{ marginTop: 20 }}
					onPress={() => {
						login(username, password)
					}}
				>
					<AppText style={text.h6} color='white' >دخول</AppText>
				</AppButton>
				<AppText style={text.p} color='red' otherStyle={{ marginTop: 20 }} >{error}</AppText>
			</View>
		</AppView>
	)
}
