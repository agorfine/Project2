 import React, { Component } from 'react'


class Fave extends Component {

	handleClick(e) {
		e.stopPropagation()
		// captures the event and stops bubbling up (child event listeners bubble up to parent event listeners)
		console.log('inside handleClick')
		this.props.onFaveToggle()
	}

	render () {
		const isFave = (this.props.isFave) ? 'remove_from_queue' : 'add_to_queue'
		// this is the same is doing document.getElement and then addClass 
		// we are changing the CLASS NAME here below we are using the ${isFave} to change class
		// if this.state.isfave is false class name = remove from que if true class name = add to que
		
		return (
			<div 
				className={`ride-row-fave ${isFave}`}
				onClick = {(e) => this.handleClick(e)}
			>

  				<p className="materialIcons"></p>
			</div>
		)
	}
}

export default Fave;