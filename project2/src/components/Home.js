import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class Home extends Component {

	render () {


		return(
			<div>
				<h1>Disney World Trip Adviser</h1>
                <p className = "intro">Help create a magical trip for you and your family! View all of the rides and restaurants in Disney World, and make your trip happen with ease.</p>
                <div className ='routeButton'>
	                <button className = 'mkButton'><Link to="/MagicKingdom"> Magic Kingdom</Link></button>
	                <button className = 'epcotButton'><Link to="/Epcot"> Epcot</Link></button>
	                <button className = 'akButton'><Link to="/AnimalKingdom"> Animal Kingdom</Link></button>
	                <button className = 'hsButton'><Link to="/HollywoodStudios"> Hollywood Studios</Link></button>
     			</div>
			</div>	
		)
	}
}

export default Home;