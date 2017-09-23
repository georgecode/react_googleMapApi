import React, { Component } from 'react';



// class GoogleMap extends Component {
// 	render(){
// 		return(
// 			<div>
// 				<h1>Map will go here</h1>
// 			</div>
// 		)
// 	}

// }




// export default GoogleMap;


import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
} from "react-google-maps";
//import InfoBox from "react-google-maps/lib/components/addons/InfoBox";
//import demoFancyMapStyles from "./demoFancyMapStyles.json";

const StyledMapWithAnInfoBox = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyC0NyJIm9F7w1wCspVIFck3coBtBRq-fgk&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
    center: { lat: 25.03, lng: 121.6 },
  }),
  withScriptjs,
  withGoogleMap
)(props =>
  <GoogleMap
    defaultZoom={5}
    defaultCenter={props.center}
    //defaultOptions={{ styles: demoFancyMapStyles }}
  >
    {/*<InfoBox
      defaultPosition={new google.maps.LatLng(props.center.lat, props.center.lng)}
      options={{ closeBoxURL: ``, enableEventPropagation: true }}
    >*/}
      <div style={{ backgroundColor: `yellow`, opacity: 0.75, padding: `12px` }}>
        <div style={{ fontSize: `16px`, fontColor: `#08233B` }}>
          Hello from Taipei
        </div>
      </div>
    {/*</InfoBox>*/}
  </GoogleMap>
);

//<StyledMapWithAnInfoBox />




class XGoogleMap extends Component {
	render(){
		return(
			<div>
				<h1>Map will go here</h1>
				<StyledMapWithAnInfoBox />
			</div>
		)
	}

}




export default XGoogleMap;








