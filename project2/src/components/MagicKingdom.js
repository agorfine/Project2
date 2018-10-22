import React, { Component } from 'react';
import RidesRow from './RidesRow'
import RestaurantRow from './RestaurantRow'
import Map from './Map'
import Fave from './Fave'

class MagicKingdom extends Component {

	updateHistory () {
		this.props.history.push('./')
	}

	render () {
		const land= this.props.data ? this.props.data.orlando.parks[0]: '';
		// console.log(rides)

		const rides =land.lands.map((land, i) => {
			return land.attractions ? <RidesRow 
										land = {land} 
										key = {i} 
										onFaveToggle={() => this.props.onFaveToggle()} 
										isFave = {() => this.props.faves.includes()} 
										fave={this.props.faves}
										/> : '';
		})

		const restaurants =land.lands.map((land, i) => {
			return land.dining ? <RestaurantRow 
									land = {land} 
									key ={i} 
									onFaveToggle={() => this.props.onFaveToggle(land)}
									/> : '';

		})

		const viewport= {
		   width: 300,
		   height: 200,
		   latitude: 28.4177,
		   longitude: -81.5812,
		   zoom: 14
		  }

		// const viewportMobile= {
		//    width: 600,
		//    height: 500,
		//    latitude: 28.4177,
		//    longitude: -81.5812,
		//    zoom: 16
		//   } 


		return (
			<div className = 'magicKingdom'>
				<nav className= 'navBar'>
						<div className= 'logo'>Walt Disney World</div>
						<div className= 'navLink'>
							<div className ="homeButton" onClick={() => this.props.history.push('/')}>Home </div>
							<div className ="faveButton">Favorites</div>
						</div>	
				</nav>
				<div className= 'parkContainer'>
					<div className= 'parkName'>
						<h1 className= 'parkTitle'>Magic Kingdom</h1>
					</div>

					<div className= 'parkHead'>
						
						<Map viewport= { viewport } />
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