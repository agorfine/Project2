import React, { Component } from 'react';
import RidesRow from './RidesRow'
import RestaurantRow from './RestaurantRow'
import Map from './Map'

function AnimalKingdom(props) {

	function updateHistory () {
		props.history.push('./')
	}


	const land= props.data ? props.data.orlando.parks[3]: '';
	// console.log(rides)

	const rides =land.lands.map((land, i) => {
	return land.attractions ? <RidesRow land = {land} key = {i} onFaveToggle={() => props.onFaveToggle(land)} isFave = {() => props.faves.includes()}/> : '';
	})

	const restaurants =land.lands.map((land, i) => {
	return land.dining ? <RestaurantRow land = {land} key ={i} onFaveToggle={() => props.onFaveToggle(land)}/> : '';

	})

	const viewport= {
	   width: 600,
	   height: 400,
	   latitude: 28.3597,
	   longitude: -81.5913,
	   zoom: 16
	  }

	return (
		<div className = 'animalKingdom'>
			<nav className= 'navBar'>
						<div className= 'logo'>Walt Disney World</div>
						<div className= 'navLink'>
							<div className ="homeButton" onClick={() => props.history.push('/')}>Home </div>
							<div className ="faveButton">Favorites</div>
						</div>	
				</nav>
			
			<div className= 'parkContainer'>
				<div className= 'map'>
					<Map viewport = { viewport } />
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

export default AnimalKingdom;