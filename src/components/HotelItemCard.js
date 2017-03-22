import React, { Component } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Card, CardSection, Star } from './common';

class HotelItemCard extends Component {
  
  // Extract movie and onPress props passed from List component
  render({ hotel, onPress } = this.props) {
    const {
      name,
      price,
      offer,
      image,
      stars
    } = hotel;
    return (
      // Row press handler
      <TouchableOpacity
        // Pass row style
        style={styles.row}
        // Call onPress function passed from List component when pressed
        onPress={onPress}
        // Dim row a little bit when pressed
        activeOpacity={0.7}
      >
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
              <Star number={stars.number} color={stars.color}/>
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
      </TouchableOpacity>
    );
  }

}
const styles = {
  row: {
    paddingBottom: 4,                   // Add padding at the bottom
  },
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
export default HotelItemCard;