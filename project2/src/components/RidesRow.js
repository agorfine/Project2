import React, { Component } from 'react';
import Fave from './Fave'


class RidesRow extends Component {

	render () {

		let rides = this.props.land.attractions.map((ride, i) => {
			return <li key = {i} className= 'rideRow'>{ride.name} 
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
						{rides}
					</ul>

				</div>	
			
			</div>
		)
	}
}

export default RidesRow;