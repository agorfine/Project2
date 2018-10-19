import React, { Component } from 'react';
import RidesRow from './RidesRow'
import RestaurantRow from './RestaurantRow'
import Map from './Map'

class Epcot extends Component {

	updateHistory () {
		this.props.history.push('./')
	}

	render () {
		const land= this.props.data ? this.props.data.orlando.parks[1]: '';
		// console.log(rides)

		const rides =land.lands.map((land, i) => {
			return land.attractions ? <RidesRow land = {land} key = {i} onFaveToggle={() => this.props.onFaveToggle(land)} isFave = {() => this.props.faves.includes()}/> : '';
		})

		const restaurants =land.lands.map((land, i) => {
			return land.dining ? <RestaurantRow land = {land} key ={i} onFaveToggle={() => this.props.onFaveToggle(land)}/> : '';

		})

		const viewport= {
			width: 600,
			height: 400,
			latitude: 28.3597,
			longitude: -81.5913,
			zoom: 16
		}

		return (
			<div className = 'epcot'>
				<button className ="homeButton" onClick={() => this.props.history.push('/')}>Home </button>
				<div className= 'parkContainer'>
					<div className= 'map'>
						<Map viewport={ viewport }/>
					</div>
					<div className = 'parkPageContainer'>
						<div className = 'ridesDiv'>
							<div className = 'rideTitle'> Rides</div>
							{rides}
						</div>
						<div className = 'restaurantDiv'>
							<div className = 'restaurantTitle'> Dining</div>
							{restaurants}
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Epcot;