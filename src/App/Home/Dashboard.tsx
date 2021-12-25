import React from 'react'
import { View, Text, Dimensions } from 'react-native'
import AppButton from '../../Components/AppButton'
import AppText from '../../Components/AppText'
import { HomeNavProps } from '../../Params/HomeNavProps'
import { button } from '../../Styles/button'
import { text } from '../../Styles/text'

export default function Dashboard({navigation}: HomeNavProps<'Dashboard'>) {
	if (Dimensions.get("window").width < 768) return (
		<View style={{
			justifyContent: 'space-around',
			height: Dimensions.get("window").height - 60,
			alignItems: 'center'
		}}>
			<AppButton 
				style={button.buttonView}
				onPress={() => navigation.navigate("")}
				size={button.bigButton}
			>
				<AppText style={text.h4} color="white">إجراء تحليل</AppText>
			</AppButton>
			<AppButton 
				style={button.buttonView}
				onPress={() => navigation.navigate("")}
				size={button.bigButton}
			>
				<AppText style={text.h4} color="white">شهادة طبية</AppText>
			</AppButton>
			<AppButton 
				style={button.buttonView}
				onPress={() => navigation.navigate("Certificate")}
				size={button.bigButton}
			>
				<AppText style={text.h4} color="white">وصفة طبية</AppText>
			</AppButton>
		</View>
	)
	return (
		<View style={{
			justifyContent: 'space-around',
			height: Dimensions.get("window").height - 60
		}}>
			<View style={{ 
				width: '100%',
				justifyContent: 'space-around', 
				flexDirection: 'row' 
			}}>
				<AppButton 
					style={button.buttonView}
					onPress={() => navigation.navigate("")}
					size={button.bigButton}
				>
					<AppText style={text.h4} color="white">إجراء تحليل</AppText>
				</AppButton>
				<AppButton 
					style={button.buttonView}
					onPress={() => navigation.navigate("")}
					size={button.bigButton}
				>
					<AppText style={text.h4} color="white">شهادة طبية</AppText>
				</AppButton>
				<AppButton 
					style={button.buttonView}
					onPress={() => navigation.navigate("Certificate")}
					size={button.bigButton}
				>
					<AppText style={text.h4} color="white">وصفة طبية</AppText>
				</AppButton>
			</View>
			<View style={{ 
				width: '100%',
				justifyContent: 'space-around', 
				flexDirection: 'row' 
			}}>
				<AppButton 
					style={button.buttonView}
					onPress={() => navigation.navigate("")}
					size={button.bigButton}
				>
					<AppText style={text.h4} color="white">معلومات المريض</AppText>
				</AppButton>
				<AppButton 
					style={button.buttonView}
					onPress={() => navigation.navigate("")}
					size={button.bigButton}
				>
					<AppText style={text.h4} color="white">رسالة طبية</AppText>
				</AppButton>
				<AppButton 
					style={button.buttonView}
					onPress={() => navigation.navigate("")}
					size={button.bigButton}
				>
					<AppText style={text.h4} color="white">قائمة المواعيد</AppText>
				</AppButton>
			</View>
			<View style={{ 
				width: '100%',
				justifyContent: 'space-around', 
				flexDirection: 'row' 
			}}>
				<AppButton 
					style={button.buttonView}
					onPress={() => navigation.navigate("")}
					size={button.bigButton}
				>
					<AppText style={text.h4} color="white">كشف بالأشعة</AppText>
				</AppButton>
				<AppButton 
					style={button.buttonView}
					onPress={() => navigation.navigate("")}
					size={button.bigButton}
				>
					<AppText style={text.h4} color="white">Échographie</AppText>
				</AppButton>
				<AppButton 
					style={button.buttonView}
					onPress={() => navigation.navigate("")}
					size={button.bigButton}
				>
					<AppText style={text.h4} color="white">اتصال</AppText>
				</AppButton>
			</View>
		</View>
	)
}
