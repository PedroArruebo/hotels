//Import libraries for a component
import React from 'react';
import { Text, View } from 'react-native';
//Make a component
const Header = (props) => {
	const { textStyle, viewStyle} = styles;
	return (
		<View style={viewStyle}>
			<Text style={textStyle}>{props.headerText}</Text>
		</View>
		);
};
const styles = {
	viewStyle: {
		backgroundColor: '#ff7200',
		justifyContent: 'center',
		alignItems: 'center',
		height: 50,
		paddingTop: 10,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 3},
		shadowOpacity: 0.3,
		elevation: 2,
		position: 'relative'
	},
	textStyle: {
		fontSize: 20,
		color: '#fff',
		fontWeight: '600'
	}
};
//Make the component available to other parts of the app
export {Header};