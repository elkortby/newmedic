import React, { useEffect, useState } from "react";
import { Platform, Text, View } from "react-native";
import * as Font from 'expo-font'
import { FontDisplay, useFonts } from 'expo-font';
import { text } from "../Styles/text";

import CairoLight from '../../assets/Fonts/Cairo/Cairo-Light.ttf'
import CairoRegular from '../../assets/Fonts/Cairo/Cairo-Bold.ttf'
import CairoBold from '../../assets/Fonts/Cairo/Cairo-Bold.ttf'

type style = {
	fontSize: number,
	color: string,
	fontFamily: string,
}

type otherStyle = {
	textAlign?: 'left' | 'center' | 'right',
	width?: string
}

type color = "blue" | "medic" | "white" | "black" | "red"

export default function AppText({children, style, otherStyle, color} 
	: { children: string, style: style, otherStyle?: otherStyle, color?: color }) {
		
	const [hexcolor, sethexcolor] = useState("")
	const [fontsLoaded, setfontsLoaded] = useState(false)
	
	const [loaded] = useFonts({
		CairoLight: require('../../assets/Fonts/Cairo/Cairo-Light.ttf'),
		CairoRegular: require('../../assets/Fonts/Cairo/Cairo-Bold.ttf'),
		CairoBold: require('../../assets/Fonts/Cairo/Cairo-Bold.ttf'),
	});

	const _loadFontsAsync = async () => {
        if (Platform.OS === "web") {
			try {
				await Font.loadAsync({
					CairoLight: {
						uri: CairoLight,
						fontDisplay: FontDisplay.SWAP,
					},
					CairoRegular: {
						uri: CairoRegular,
						fontDisplay: FontDisplay.SWAP,
					},
					CairoBold: {
						uri: CairoBold,
						fontDisplay: FontDisplay.SWAP,
					},
				})
				setfontsLoaded(true)
            } catch (error) {
                console.error(error)
            }
        } 
    }

	useEffect(() => {
		switch (color) {
			case "black": sethexcolor("#000000"); break;
			case "white": sethexcolor("#ffffff"); break;
			case "blue": sethexcolor("#084B83"); break;
			case "medic": sethexcolor("#42BFDD"); break;
			case "red": sethexcolor("#DF2935"); break;
			default: sethexcolor("#000000"); break;
		}		
		console.log(loaded)
		_loadFontsAsync()
	}, [])
	
	if (!loaded) {
		return <Text>
			{children}
		</Text>;
	}
	
    if (Platform.OS !== "web" && loaded) return (
		<Text style={[text.text, style, otherStyle, { color: hexcolor }]}>
			{children}
		</Text>
    );
    
    if (fontsLoaded && Platform.OS === "web") return (
        <Text style={[text.text, style, otherStyle, { color: hexcolor }]}>
			{children}
		</Text>
    );
	
	return (
        <Text style={style}>
            {children}
        </Text>
    );
}
