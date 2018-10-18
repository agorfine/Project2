import React, { Component } from 'react';
import RidesRow from './RidesRow'
import RestaurantRow from './RestaurantRow'
import MapMK from './MapMK'
import Fave from './Fave'

class MagicKingdom extends Component {

	updateHistory () {
		this.props.history.push('./')
	}

	render () {
		const land= this.props.data ? this.props.data.orlando.parks[0]: '';
		// console.log(rides)

		const rides =land.lands.map((land, i) => {
			return land.attractions ? <RidesRow land = {land} key = {i} onFaveToggle={() => this.props.onFaveToggle(land)} isFave = {() => this.props.faves.includes()}/> : '';
		})

		const restaurants =land.lands.map((land, i) => {
			return land.dining ? <RestaurantRow land = {land} key ={i} onFaveToggle={() => this.props.onFaveToggle(land)}/> : '';

		})

		return (
			<div className = 'magicKingdom'>
				<button className ="homeButton" onClick={() => this.props.history.push('/')}>Home </button>
				<div className= 'parkContainer'>
					<div className= 'parkName'>
						<img className='disneyParksLogo' src='https://res.cloudinary.com/drsaojfyp/image/upload/v1539830267/disney-logo-6.png' />
						<h1>Magic Kingdom</h1>
					</div>

					<div className= 'parkHead'>
						
						<MapMK />
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

export default MagicKingdom;