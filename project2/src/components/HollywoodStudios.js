import React, { Component } from 'react';
import RidesRow from './RidesRow'
import RestaurantRow from './RestaurantRow'

class HollywoodStudios extends Component {

	updateHistory () {
		this.props.history.push('./')
	}

	render () {
		const land= this.props.data ? this.props.data.orlando.parks[2]: '';
		// console.log(rides)

		const rides =land.lands.map((land, i) => {
			return land.attractions ? <RidesRow land = {land} key = {i} /> : '';
		})

		const restaurants =land.lands.map((land, i) => {
			return land.dining ? <RestaurantRow land = {land} key ={i} /> : '';

		})

		return (
			<div>
				<button className ="homeButton" onClick={() => this.props.history.push('/')}>Home </button>
				<div className = 'parkPageContainer'>
					<div className = 'ridesDiv'>
						<div className = 'rideTitle'> Rides</div>
						{rides}
					</div>
					<div className = 'restaurantDiv'>
						<div className = 'restaurantTitle'> Restaurant</div>
						{restaurants}
					</div>
				</div>
 			</div>
		)
	}
}

export default HollywoodStudios;