import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class Home extends Component {

	render () {

		return(
			<div className="homePage">
				<h1 className="title">Disney World Trip Adviser</h1>
                <p className = "intro">Help create a magical trip for you and your family! View all of the rides and restaurants in Disney World, and make your trip happen with ease.</p>
                <div className ='routeButton'>
	                <button className = 'mkButton'><Link to="/MagicKingdom" className='mkLink'> Magic Kingdom</Link></button>
	                <button className = 'epcotButton'><Link to="/Epcot" className='epcotLink'> Epcot</Link></button>
	                <button className = 'akButton'><Link to="/AnimalKingdom" className='akLink'> Animal Kingdom</Link></button>
	                <button className = 'hsButton'><Link to="/HollywoodStudios" className='hsLink'> Hollywood Studios</Link></button>
     			</div>
			</div>	
		)
	}
}

export default Home;