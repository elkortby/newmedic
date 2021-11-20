import React from 'react'
import AppText from '../../Components/AppText'
import { text } from '../../Styles/text'

export default function WelcomeText() {
	return (
		<>
			<AppText style={text.h2} otherStyle={{ textAlign: 'center' }}>مرحبا</AppText>
			<AppText style={text.p} otherStyle={{ textAlign: 'center' }}>إدارة العيادة لم يكن بهذه السهولة من قبل</AppText>
		</>
	)
}
