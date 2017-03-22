import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ItemDropdown = ({onPress, item}) => {
	const {ItemDropdownStyle, textStyle} = styles;
	return (
		<TouchableOpacity style={ItemDropdownStyle} onPress={onPress}>
			<View style={{flexDirection:'row',flex: 1}}>
			if (item.selected) {
				if (item.name == "onlyroom") {
					<View style={{flexDirection:'row',flex: 2}}>
		                <Icon name="bed" size={15} color="#0f0f0f" style={{padding:3, marginRight:5}}/>
		                <Text>{item.text}</Text>
		            </View>
		            <View style={{flex: 1, alignItems:'flex-end'}}>
		                <Icon name="fa-check-square" size={15} color="#f39a2e" style={{padding:3, marginRight:5}}/>
		            </View>
				} else {
					<View style={{flexDirection:'row',flex: 2}}>
		                <Icon name="bed" size={15} color="#0f0f0f" style={{padding:3, marginRight:5}}/>
		                <Text>{item.text}</Text>
		            </View>
		            <View style={{flex: 1, alignItems:'flex-end'}}>
		                <Icon name="fa-check-square" size={15} color="#f39a2e" style={{padding:3, marginRight:5}}/>
		            </View>
				}
			} else {
				if (item.name == "onlyroom") {
					<View style={{flexDirection:'row',flex: 1}}>
		                <Icon name="bed" size={15} color="#0f0f0f" style={{padding:3, marginRight:5}}/>
		                <Text>{item.text}</Text>
		            </View>
				} else {
					<View style={{flexDirection:'row',flex: 1}}>
		                <Icon name="coffee" size={15} color="#0f0f0f" style={{padding:3, marginRight:5}}/>
		                <Text>{item.text}</Text>
		            </View>
				}
			}
              
            </View>
		</TouchableOpacity>
	);
};

const styles = {
	ItemDropdownStyle: {
		flex: 1,
		alignSelf: 'stretch',
		backgroundColor: '#fff',
		marginLeft: 5,
		marginRight: 5,
	}
};

export {ItemDropdown};