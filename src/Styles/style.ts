import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	centerPage: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	fullSize: {
		width: "100%",
		// height: "100%"
	},
	card: {
		width: 400,
		height: 400,
		backgroundColor: 'white',
		shadowRadius: 5,
		shadowOpacity: 0.3,
		borderRadius: 20,
		alignItems: 'center',
		justifyContent: 'center'
	}
})

export { styles }