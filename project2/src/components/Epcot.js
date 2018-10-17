import React, { Component } from 'react';

class Epcot extends Component {

	updateHistory () {
		this.props.history.push('./')
		this.props.show = true
	}


	render () {
		// const land = this.props.data.orlando.parks
		// console.log(land)

		return(
			<div>
				<button className ="homeButton" onClick={() => this.props.history.push('/')}>Home </button>
				<div></div>
			</div>	
		)
	}
}

export default Epcot;