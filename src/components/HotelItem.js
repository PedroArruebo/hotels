import React from 'react';
import { Text, View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Card, CardSection } from './common';

const HotelItem = ({hotel}) => {

	const {
		name,
		price,
		offer,
		image
	} = hotel;
	const star = (<Icon name="star" size={30} color="#900" />)
	return(
		<Card>
			<CardSection>
				<Image
					style={styles.imageStyle}
					source={{uri: image}}
				/>
			</CardSection>
			<CardSection>
				<View style={{flexDirection:'column'}}>
					<Text style={styles.hotelTextName}>{name}</Text>
					<View style={{flexDirection:'row'}}>
						<Icon name="star" size={15} color="#ffab00" style={{padding:3}}/>
						<Icon name="star" size={15} color="#ffab00" style={{padding:3}} />
						<Icon name="star" size={15} color="#ffab00" style={{padding:3}} />
						<Icon name="star" size={15} color="#ffab00" style={{padding:3}} />
						<Icon name="star" size={15} color="#ffab00" style={{padding:3}} />
					</View>
					<View style={{flexDirection:'row'}}>
						<Icon name="coffee" size={15} color="#9e9e9e" style={{padding:3}}/>
						<Text style={styles.hotelTextName}>{offer}</Text>
					</View>
				</View>
				<View style={styles.priceStyle}>
					<Text>precio por noche</Text>
					<Text style={styles.priceTextStyle}>ARS {price}</Text>
				</View>				
			</CardSection>
		</Card>
	);
};
const styles = {
	imageStyle:{
		height: 200,
		width: null,
		flex:1
	},
	priceStyle:{
		flex: 1,
		alignItems: 'flex-end',
		marginRight: 10,
	},	
	priceTextStyle:{
		color: '#000',
		fontSize: 20,
		fontWeight: '600'
	}
}
export default HotelItem;