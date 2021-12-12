import { StyleSheet } from "react-native";

const input = StyleSheet.create({
	inputParagraphView: {
		paddingHorizontal: 10,
		width: 200,
		height: 40,
	},
	inputView: {
		paddingHorizontal: 10,
		width: 200,
		height: 40,
	},
	longInput: {
		paddingHorizontal: 10,
		width: '60%',
		height: 40,
	},
	smallInputView: {
		paddingHorizontal: 10,
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