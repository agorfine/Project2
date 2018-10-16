import React, {Component} from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
	render () {
		return (
			<div>
		    	
				<nav className="nav">
				    <ul>
				       <li><Link to="/MagicKingdom">Magic Kingdom</Link></li>
				       <li><Link to="/Epcot">Epcot</Link></li>
				       <li><Link to="/AnimalKingdom">Animal Kingdom</Link></li>
				       <li><Link to="/HollywoodStudios">Hollywood Studios</Link></li>
				     </ul>
				</nav>
		    </div>
 
		)
	}
}

export default Header