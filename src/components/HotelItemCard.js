import React, { Component } from 'react';
import { Image, Text, TouchableOpacity, View, ListView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Card, CardSection, Star, Dropdown, ItemDropdown } from './common';


class HotelItemCard extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      selected: 'onlyroom',
      open: false,
      dataSource: new ListView.DataSource({
           rowHasChanged : (row1, row2) => true
       }),
      items: []
    }
  }

  onValueChange = (key: string, value: string) => {
    const newState = {};
    newState[key] = value;
    this.setState(newState);
  };
  renderItemDropdown = (item) => {
      return (
        <ItemDropdown
          // Pass item object
          item={item}
          // Pass a function to handle row presses
          onPress={this.onDropdownSelect.bind(this,breakfast,onlyroom,selected,open)}
        />
      );
  }
  onDropdownSelect(breakfast,onlyroom,selected,open){
    
    switch(selected){
      case 'onlyroom':
          this.setState({ items: [{ "name":"onlyroom", "selected": true, "text":"Solo la habitación" }, { "name":"breakfast", "selected": false, "text":"Desayuno" }]});   
      case 'breakfast':
          this.setState({ items: [{ "name":"onlyroom", "selected": false, "text":"Solo la habitación" }, { "name":"breakfast", "selected": true, "text":"Desayuno" }]}); 
    }
    if (open) {
      this.setState({ open: false});      
      this.renderDropdown.bind(this,breakfast,onlyroom,selected,open);
    } else {
      this.setState({ open: true});
      this.renderDropdown.bind(this,breakfast,onlyroom,selected,open);
    }

  }
  renderDropdown(breakfast,onlyroom,selected,open){
    if (this.state.open) {
      return(
        <ListView
            dataSource={this.dataSource.cloneWithRows(this.state.items)}
            renderRow={this.renderItemDropdown}
        />
      );
        
    } else {
      return(
        <Dropdown onPress={this.onDropdownSelect.bind(this,breakfast,onlyroom,selected,open)}>
          {this.renderLabel(breakfast,onlyroom,selected)}
        </Dropdown>
      );        
    }
      
  }

  renderLabel(breakfast,onlyroom,selected){
    
    switch(selected){
      case 'onlyroom':
          return (
            <View style={{flexDirection:'row',flex: 1}}>
              <View style={{flexDirection:'row',flex: 2}}>
                <Icon name="bed" size={15} color="#0f0f0f" style={{padding:3, marginRight:5}}/>
                <Text>{onlyroom}</Text>
              </View>
              <View style={{flex: 1, alignItems:'flex-end'}}>
                <Icon name="chevron-down" size={15} color="#f39a2e" style={{padding:3, marginRight:5}}/>
              </View>
            </View>
          );
      case 'breakfast':
          return (
            <View style={{flexDirection:'row',flex: 1}}>
              <Icon name="coffee" size={15} color="#0f0f0f" style={{padding:3, marginRight:5}}/>
              <Text>{breakfast}</Text>
              <Icon name="chevron-down" size={15} color="#f39a2e" style={{padding:3, marginRight:5}}/>
            </View>
          );
    }
  }
 
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
                {this.renderDropdown(breakfast,onlyroom,this.state.selected,this.state.open)}                
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