import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class Home extends Component {

	render () {

		return(
			<div className="homePage">
				<nav className= 'navBar'>
						<div className= 'logo'>Walt Disney World</div>
						<div className= 'navLink'>
							<div className ="homeButton" onClick={() => this.props.history.push('/')}>Home </div>
							<div className ="faveButton">Favorites</div>
						</div>	
				</nav>
				<h1 className="title">Disney World Trip Adviser</h1>
                <p className = "intro">Help create a magical trip for you and your family! View all of the rides and restaurants in Disney World, and make your trip happen with ease.</p>
                <div className ='routeButton'>
	                <div className = 'mkButton'><Link to="/MagicKingdom" className='mkLink'> Magic Kingdom</Link></div>
	                <div className = 'epcotButton'><Link to="/Epcot" className='epcotLink'> Epcot</Link></div>
	                <div className = 'akButton'><Link to="/AnimalKingdom" className='akLink'> Animal Kingdom</Link></div>
	                <div className = 'hsButton'><Link to="/HollywoodStudios" className='hsLink'> Hollywood Studios</Link></div>
     			</div>
			</div>	
		)
	}
}

export default Home;
