import React,{Component} from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
//import App from '../App';
//import {GoogleApiWrapper} from 'google-maps-react';
 
export class GoogleMap extends Component {
    state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    };
   
    onMarkerClick = (props, marker, e) =>
      this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
      });
   
    onMapClicked = (props) => {
      if (this.state.showingInfoWindow) {
        this.setState({
          showingInfoWindow: false,
          activeMarker: null
        })
      }
    };
   
    render() {
      return (
        <Map google={this.props.google}
           
        >
          <Marker onClick={this.onMarkerClick}
                  name={'Current location'} />
   
        
                  
        </Map>
      )
    }
  }

  export default GoogleApiWrapper({
    apiKey: (
        'AIzaSyBLVHqBpK4pTUHKxRLctTj6a3nHrt1d-uI')
  })()