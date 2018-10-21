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
			width: 300,
			height: 200,
			latitude: 28.3747,
			longitude: -81.5494,
			zoom: 14
		}

		return (
			<div className = 'epcot'>
				<nav className= 'navBar'>
						<div className= 'logo'>Walt Disney World</div>
						<div className= 'navLink'>
							<div className ="homeButton" onClick={() => this.props.history.push('/')}>Home </div>
							<div className ="faveButton">Favorites</div>
						</div>	
				</nav>
				<div className= 'parkContainer'>
					<div className= 'parkName'>
						<h1 className= 'parkTitle'>Epcot</h1>
					</div>
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