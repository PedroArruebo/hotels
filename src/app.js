//Import libraries for a component
import React, { Component } from 'react';
import { Navigator, View } from 'react-native';
import { Header } from './components/common';
import Hotels from './components/Hotels';
import HotelsItemDetail from './components/HotelsItemDetail';

const RouteMapper = (route, navigationOperations, onComponentRef) => {
	if (route.name === 'hotels') {
	    return (
	    	<View>
		    	<Header headerText="Elegí tu Hotel"/>
	      		<Hotels navigator={navigationOperations} />
		    </View>
	    );
	} else if (route.name === 'hotel') {
	    return (
	    	
		      	<HotelsItemDetail
			        // Pass hotel object passed with route down as a prop
			        hotel={route.hotel}
			        // Pass navigationOperations as navigator prop
			        navigator={navigationOperations}
		      	/>
	    );
	}
};

class App extends Component {

  render() {
    return (
      // Handle navigation between screens
      <Navigator
        // Default to list route
        initialRoute={{name: 'hotels'}}
        // Use FloatFromBottom transition between screens
        configureScene={(route, routeStack) => Navigator.SceneConfigs.PushFromRight}
        // Pass a route mapper functions
        renderScene={RouteMapper}
      />
    );
  }
}


export default App;

