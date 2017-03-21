//Import libraries for a component
import React, { Component } from 'react';
import { ScrollView , View, Text, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Header, Card, CardSection } from './common';
import MapView from 'react-native-maps';
const HotelsItemDetail = ({hotel,navigator}) => {

	
	return (
		<ScrollView style={styles.hotelContainerStyle}>
			<Image style={styles.imageHeaderStyle} source={{uri: hotel.image}} />
			<View style={styles.hotelBarDetail}>
				<TouchableOpacity
	              // Go to the previous screen
	              onPress={() => {navigator.pop()}}
	              // Dim button a little bit when pressed
	              activeOpacity={0.7}
	            >
	              	<Text style={styles.buttonBack}> Regresar</Text>
	            </TouchableOpacity>
				<Text style={styles.hotelTextDetail}> Detalle</Text>
			</View>
			<View style={styles.hotelDetailContainer}>
				<Card>
					<CardSection>
						<View style={{flexDirection:'column'}}>
							<Text style={styles.hotelTextName}>{hotel.name}</Text>
							<View style={{flexDirection:'row'}}>
								<Icon name="star" size={15} color="#ffab00" style={{padding:3}}/>
								<Icon name="star" size={15} color="#ffab00" style={{padding:3}} />
								<Icon name="star" size={15} color="#ffab00" style={{padding:3}} />
								<Icon name="star" size={15} color="#ffab00" style={{padding:3}} />
								<Icon name="star" size={15} color="#ffab00" style={{padding:3}} />
							</View>
						</View>
							
							
					</CardSection>
					<CardSection>
						<MapView
				          initialRegion={{
						      latitude: 37.78825,
						      longitude: -122.4324,
						      latitudeDelta: 0.0922,
						      longitudeDelta: 0.0421,
						    }}
				        >
				        </MapView>
					</CardSection>
				</Card>
			</View>			
		</ScrollView>
	)		
};
const styles = {
	hotelContainerStyle: {
	    flex: 1                         // Padding inside
	},
	imageHeaderStyle:{
		height: 200,
		width: null,
		flex: 1
	},
	hotelBarDetail:{
		backgroundColor: 'transparent',
		height: 50,
		width:null,
		flex:1,
		position: 'absolute',
		marginTop: 0,
		flexDirection: 'row',
		justifyContent: 'space-around',
	},
	buttonBack:{
		color: '#fff',
		fontSize: 20,
		fontWeight: '600',
		marginLeft: 5,
		padding: 10
	},
	hotelTextDetail:{
		color: '#fff',
		fontSize: 20,
		fontWeight: '600',
		marginLeft: 5,
		padding: 10
	},
	hotelDetailContainer:{
		position: 'relative',
		flex: 2,
		marginLeft: 5,
		marginRight: 5,
		marginTop: -50,
		height: 300,
		marginBottom: 15
	},
	hotelTextName:{
		color: '#000',
		fontSize: 25,
		fontWeight: '600',
		padding: 10
	}

};

export default HotelsItemDetail;