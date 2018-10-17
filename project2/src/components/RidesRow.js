import React, { Component } from 'react';


class RidesRow extends Component {


	render () {

		let rides = this.props.land.attractions.map((ride, i) => {
			return <li key = {i}>{ride.name}</li>
		})

		return(
			<div>
				
				<div className = 'land'>{this.props.land.name}</div>
				
				<div>
					<ul className = 'rides'>	
						{rides}
					</ul>
				</div>	
			
			</div>
		)
	}
}

export default RidesRow;