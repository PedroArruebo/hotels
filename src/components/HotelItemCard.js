import React, { Component } from 'react';
import { Image, Text, TouchableOpacity, View, Picker } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Card, CardSection, Star, Button } from './common';

const Item = Picker.Item;

class HotelItemCard extends Component {
  state = {
    selected: 'onlyroom',
  };

  onValueChange = (key: string, value: string) => {
    const newState = {};
    newState[key] = value;
    this.setState(newState);
  };

 
  // Extract movie and onPress props passed from List component
  render({ hotel, onPress } = this.props) {
    const {
      name,
      price,
      breakfast,
      onlyroom,
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
            <View style={{flexDirection:'column', flex: 1}}>
              <View style={{flexDirection:'row'}}>                
                <View>
                  <Text style={styles.hotelTextName}>{name}</Text>
                  <Star number={stars.number} color={stars.color}/>
                </View>
                <View style={styles.priceStyle}>
                  <Text>precio por noche</Text>
                  <Text style={styles.priceTextStyle}>ARS {price}</Text>
                </View>
              </View>
              <View style={{flexDirection:'row'}}>                
                <Picker
                  style={styles.picker}
                  selectedValue={this.state.selected}
                  onValueChange={this.onValueChange.bind(this, 'selected')}
                  mode="dropdown">
                  <Item label={onlyroom} value="onlyroom"/>
                  <Item label={breakfast} value="breakfast" />
                </Picker>
              </View>
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
  picker: {
    height: 25,
    width: null,
    flex: 1
  },
  imageStyle:{
    height: 200,
    width: null,
    flex:1
  },
  priceStyle:{
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