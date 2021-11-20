import { StyleSheet } from "react-native";

const input = StyleSheet.create({
	inputView: {
		width: 200,
		height: 40,
	},
	smallInputView: {
		width: 100,
		height: 40,
		textAlign: 'center'
	},
	borderInput: {
		borderRadius: 10,
		borderWidth: 2,
		borderColor: '#42BFDD'
	},
	blancInput: {
		backgroundColor: 'white'
	},
	capitalize: {
		textTransform: 'uppercase'
	}
})

export { input }