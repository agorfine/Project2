import React, { Component } from 'react';
import Fave from './Fave'



class RestaurantRow extends Component {


	render () {

		let restaurants = this.props.land.dining.map((restaurant, i) => {
			return <li key = {i} className ='rideRow'>
						<div className = 'rideName'>{restaurant.name}</div>
						<Fave 
							onFaveToggle = {this.props.onFaveToggle}
          					isFave = {() => this.props.isFave()}
          					fave={this.props.faves}
          				/>
					</li>
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