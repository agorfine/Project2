import React, { Component } from 'react';



class RestaurantRow extends Component {


	render () {

		let restaurants = this.props.land.dining.map((restaurant, i) => {
			return <li key = {i}>{restaurant.name}</li>
		})

		return(
			<div>
				<div className = 'land'>{this.props.land.name}</div>
				<div>
					<ul className = 'rides'>	
						{restaurants}
					</ul>
				</div>	
			</div>	
		)
	}
}

export default RestaurantRow;