import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { useFonts } from 'expo-font';
import { text } from "../Styles/text";

type style = {
	fontSize: number,
	color: string,
	fontFamily: string,
}

type otherStyle = {
	textAlign: 'left' | 'center' | 'right'
}

type color = "blue" | "medic" | "white" | "black" | "red"

export default function AppText({children, style, otherStyle, color} 
	: { children: string, style: style, otherStyle?: otherStyle, color?: color }) {

	const [hexcolor, sethexcolor] = useState("")
	
	useEffect(() => {
		switch (color) {
			case "black": sethexcolor("#000000"); break;
			case "white": sethexcolor("#ffffff"); break;
			case "blue": sethexcolor("#084B83"); break;
			case "medic": sethexcolor("#42BFDD"); break;
			case "red": sethexcolor("#DF2935"); break;
			default: sethexcolor("#000000"); break;
		}		
	}, [])


	const [loaded] = useFonts({
		CairoLight: require('../../assets/Fonts/Cairo/Cairo-Light.ttf'),
		CairoRegular: require('../../assets/Fonts/Cairo/Cairo-Bold.ttf'),
		CairoBold: require('../../assets/Fonts/Cairo/Cairo-Bold.ttf'),
	});
	
	if (!loaded) {
		return <Text>
			{children}
		</Text>;
	}
	return (
		<Text style={[text.text, style, otherStyle, { color: hexcolor }]}>
			{children}
		</Text>
	)
}
