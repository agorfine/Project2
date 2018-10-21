import React, { Component } from 'react';
import ReactMapGL from 'react-map-gl'


let MAPBOX_TOKEN = 'pk.eyJ1IjoiYWFyb25jdWxwIiwiYSI6ImNqbmRheXl1MzBjZ2Eza280eGJkNjU2ZGwifQ.roPV61S5Vnt7Eu2oKRp7ZQ'

class Map extends Component {
 state = {
  viewport: this.props.viewport
  // viewportMobile: this.props.mobile
 }

//  viewportChange (screenSize) {
//   let screenSize = ''

//   return (
//       <MediaQuery minDeviceWidth={400}>
//         {(matches) => {
//           if (matches) {
//             screenSize = { this.state.viewportMobile }
//           } else {
//             screenSize = { this.state.viewport }
//           }  
//         }}
//       </MediaQuery>
//     )
// }

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
export default Map