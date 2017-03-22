import React from 'react';
import { Text, TouchableOpacity } from 'react-native';


const Dropdown = ({onPress, children}) => {
	const {dropdownStyle, textStyle} = styles;
	return (
		<TouchableOpacity style={dropdownStyle} onPress={onPress}>
			{children}
		</TouchableOpacity>
	);
};

const styles = {
	dropdownStyle: {
		flex: 1,
		alignSelf: 'stretch',
		backgroundColor: '#fff',
		marginLeft: 5,
		marginRight: 5,
	}
};

export {Dropdown};