import React, { Component } from 'react';
import ReactMapGL from 'react-map-gl'
import MediaQuery from 'react-responsive'


let MAPBOX_TOKEN = 'pk.eyJ1IjoiYWFyb25jdWxwIiwiYSI6ImNqbmRheXl1MzBjZ2Eza280eGJkNjU2ZGwifQ.roPV61S5Vnt7Eu2oKRp7ZQ'

class Map extends Component {
 state = {
  viewport: this.props.viewport,
  viewportMobile: this.props.mobile
 }


 render() {
  return(
    <div>
    <MediaQuery minDeviceWidth={600}>
      <div className='map'>
     <ReactMapGL
        {...this.state.viewport}
        mapStyle="mapbox://styles/mapbox/streets-v10"
        onViewportChange={(viewport) => this.setState({viewport})}
        mapboxApiAccessToken={MAPBOX_TOKEN}
      />
    </div>
      </MediaQuery>
       <MediaQuery maxDeviceWidth={400}>
      <div className='map'>
     <ReactMapGL
        {...this.state.viewportMobile}
        mapStyle="mapbox://styles/mapbox/streets-v10"
        onViewportChange={(viewportMobile) => this.setState({viewportMobile})}
        mapboxApiAccessToken={MAPBOX_TOKEN}
      />
    </div>
      </MediaQuery>
   </div>
   )
 }
}
export default Map