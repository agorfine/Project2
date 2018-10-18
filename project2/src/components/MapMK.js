import React, { Component } from 'react';
import ReactMapGL from 'react-map-gl'

let MAPBOX_TOKEN = 'pk.eyJ1IjoiYWFyb25jdWxwIiwiYSI6ImNqbmRheXl1MzBjZ2Eza280eGJkNjU2ZGwifQ.roPV61S5Vnt7Eu2oKRp7ZQ'

class MapMK extends Component {
 state = {
  viewport: {
   width: 600,
   height: 400,
   latitude: 28.4177,
   longitude: -81.5812,
   zoom: 16
  }
 }
 render() {
  return(
   <div className='map'>
   <ReactMapGL
    {...this.state.viewport}
    mapStyle="mapbox://styles/mapbox/streets-v10"
    onViewportChange={(viewport) => this.setState({viewport})}
    mapboxApiAccessToken={MAPBOX_TOKEN}
    />
    </div>
   )
 }
}
export default MapMK