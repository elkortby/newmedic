import React from 'react'
import { View } from 'react-native'
import AppButton from '../../Components/AppButton'
import AppText from '../../Components/AppText'
import AppView from '../../Components/AppView'
import { CabNavProps } from '../../Params/CabNavProps'
import { button } from '../../Styles/button'
import { styles } from '../../Styles/style'
import { text } from '../../Styles/text'

export default function index({navigation}: CabNavProps<'CreateUsers'>) {
	return (
		<AppView>
			<View style={[styles.fullSize, {
				marginBottom: 80
			}]}>
				{/* <WelcomeText /> */}
			</View>
			<AppButton 
				style={button.buttonView} 
				size={button.smallButton}
				onPress={() => {
					navigation.goBack()
				}}
			>
				<AppText style={text.h6} color='white' >رجوع</AppText>
			</AppButton>
		</AppView>
	)
}
