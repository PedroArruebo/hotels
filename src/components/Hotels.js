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
      "price":"2,200",
      "breakfast":"Desayuno",
      "onlyroom":"Solo la habitación",
      "image":"http://a.otcdn.com/headers/ilusion/img/hoteles_destinia.jpg",
      "stars": {
      	"number": 3,
      	"color": "yellow"
      }
   },
   {  
      "name":"Hotel 2",
      "price":"2,800",
      "breakfast":"Desayuno",
      "onlyroom":"Solo la habitación",
      "image":"http://www.salemgroups.com/new/images/icons/png/TravelsSlideshow/hotelreservation.jpg",
      "stars": {
      	"number": 4,
      	"color": "yellow"
      }
   },
   {  
      "name":"Hotel 3",
      "price":"3,000",
      "breakfast":"Desayuno",
      "onlyroom":"Solo la habitación",
      "image":"http://www.arqhys.com/contenidos/fotos/contenidos/Requisitos-para-los-hoteles.jpg",
      "stars": {
      	"number": 4,
      	"color": "yellow"
      }
   },
   {  
      "name":"Hotel 4",
      "price":"2,350",
      "breakfast":"Desayuno",
      "onlyroom":"Solo la habitación",
      "image":"http://www.hotelesmision.com.mx/img/slide-06.jpg",
      "stars": {
      	"number": 5,
      	"color": "yellow"
      }
   },
   {  
      "name":"Hotel 5",
      "price":"1,500",
      "breakfast":"Desayuno",
      "onlyroom":"Solo la habitación",
      "image":"https://media-cdn.tripadvisor.com/media/photo-s/02/a8/d4/55/hotel-bonampak.jpg",
      "stars": {
      	"number": 3,
      	"color": "yellow"
      }
   },
   {  
      "name":"Hotel 6",
      "price":"1,650",
      "breakfast":"Desayuno",
      "onlyroom":"Solo la habitación",
      "image":"http://viajes-cruceros.net/wp-content/uploads/2011/04/6.jpg",
      "stars": {
      	"number": 5,
      	"color": "yellow"
      }
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