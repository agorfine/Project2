import React, { Component } from 'react';
import RidesRow from './RidesRow'

class MagicKingdom extends Component {

	updateHistory () {
		this.props.history.push('./')
	}

	render () {
		const rides= this.props.data ? this.props.data.orlando.parks[0]: '';
		console.log(rides)

		const allRides = rides.map((lands) => {
			return (
				<RidesRow
				lands={lands}
				key={lands.id}
				/>
			)
		})


		return(
			<div>
				<button className ="homeButton" onClick={() => this.props.history.push('/')}>Home </button>
				<div></div>
			</div>	
		)
	}
}

export default MagicKingdom;