//Import libraries for a component
import React, { Component } from 'react';
import { ListView , View, Text} from 'react-native';
import axios from 'axios';
import HotelsList from './HotelsList.json';
import HotelItemCard from './HotelItemCard';


class Hotels extends Component{

	constructor() {
	    super();
	    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
	    this.state = {
	      dataSource: ds.cloneWithRows([  
   {  
      "name":"Hotel 1",
      "price":"2200",
      "offer":"Desayuno",
      "image":"http://a.otcdn.com/headers/ilusion/img/hoteles_destinia.jpg",
   },
   {  
      "name":"Hotel 2",
      "price":"2800",
      "offer":"Desayuno Continental",
      "image":"http://www.salemgroups.com/new/images/icons/png/TravelsSlideshow/hotelreservation.jpg",
   },
   {  
      "name":"Hotel 3",
      "price":"3000",
      "offer":"Desayuno y Comida",
      "image":"http://www.arqhys.com/contenidos/fotos/contenidos/Requisitos-para-los-hoteles.jpg",
   },
   {  
      "name":"Hotel 4",
      "price":"2350",
      "offer":"Desayuno",
      "image":"http://www.hotelesmision.com.mx/img/slide-06.jpg",
   },
   {  
      "name":"Hotel 5",
      "price":"1500",
      "offer":"Solo la habitación",
      "image":"https://media-cdn.tripadvisor.com/media/photo-s/02/a8/d4/55/hotel-bonampak.jpg",
   },
   {  
      "name":"Hotel 6",
      "price":"1650",
      "offer":"Solo la habitación",
      "image":"http://viajes-cruceros.net/wp-content/uploads/2011/04/6.jpg",
   }
]),
	    };
	  }


	renderHotelItemCard = (hotel) => {
	    return (
	      <HotelItemCard
	        // Pass hotel object
	        hotel={hotel}
	        // Pass a function to handle row presses
	        onPress={()=>{
	          // Navigate to a separate hotel detail screen
	          this.props.navigator.push({
	            name: 'hotel',
	            hotel: hotel,
	          });
	        }}
	      />
	    );
	}
	renderHotel = (hotel) => {
		return (
			<HotelItemCard // Pass a function to handle row presses
		        onPress={()=>{
		          // Navigate to a separate hotel detail screen
		          this.props.navigator.push({
		            name: 'hotel',
		            hotel: hotel,
		          });
		        }} 
		        hotel={hotel}
		    />
		);
	}
	render() {
	    return (
	      <ListView
	        dataSource={this.state.dataSource}
	        renderRow={this.renderHotelItemCard}
	      />
	    );
	}
}

const styles = {
	listStyle: {
		flex: 1,
		paddingTop: 20,
		paddingBottom: 20
	}
}
export default Hotels;