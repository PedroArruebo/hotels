import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const Star = ({number,color}) => {

	var stars = [];
	for (var i = 0; i < number; i++) {
	  stars.push(<Icon name="star" size={15} color={color} key={i} style={{padding:3}}/>);
	}
	return (
	   <View style={{flexDirection:'row'}}>
	    {stars}
	   </View>
	);
};

export {Star};

