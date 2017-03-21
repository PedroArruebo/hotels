import React, { Component } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Card, CardSection } from './common';

class HotelItemCard extends Component {
  
  // Extract movie and onPress props passed from List component
  render({ hotel, onPress } = this.props) {
    const {
      name,
      price,
      offer,
      image
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
            <View>
              <Text>{name}</Text>
            </View>
          </CardSection>
          <CardSection>
            <View>
              <Text>{offer}</Text>
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