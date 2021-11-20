import React from 'react'
import { View } from 'react-native'
import AppButton from '../../Components/AppButton'
import AppText from '../../Components/AppText'
import AppView from '../../Components/AppView'
import { CabNavProps } from '../../Params/CabNavProps'
import { button } from '../../Styles/button'
import { styles } from '../../Styles/style'
import { text } from '../../Styles/text'
import WelcomeText from './WelcomeText'

export default function index({navigation}: CabNavProps<'Welcome'>) {
	return (
		<AppView>
			<View style={[styles.fullSize, {
				marginBottom: 80
			}]}>
				<WelcomeText />
			</View>
			<AppButton 
				style={button.buttonView} 
				size={button.smallButton}
				onPress={() => {
					navigation.navigate("Activate")
				}}
			>
				<AppText style={text.h6} color='white' >دخول</AppText>
			</AppButton>
		</AppView>
	)
}
