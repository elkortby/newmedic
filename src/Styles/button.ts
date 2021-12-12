import { StyleSheet } from "react-native";

const button = StyleSheet.create({
	buttonView: {
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#42BFDD',
		borderRadius: 10,
	},
	buttonBorderView: {
		justifyContent: 'center',
		alignItems: 'center',
		borderColor: '#42BFDD',
		borderWidth: 2,
		borderRadius: 10,
	},
	smallButton: {
		width: 100,
		height: 40
	},
	bigButton: {
		width: 200,
		height: 80
	}
})

export { button }