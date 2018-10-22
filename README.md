# Project Overview

## Project Links

Below is a link to the deployed project. The project is mobile responsive, so make sure to check it out on your phone!

- [Disney-Trip-Adviser](http://disney-trip.surge.sh/Epcot)


## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Project Description | Complete
|Day 2| Wireframes / Priority Matrix / Functional Components | Complete
|Day 3| Home Page | Complete
|Day 4| Pseudocode / JSX MVP | Complete
|Day 5| Full Working App / Post MVP  | Complete
|Day 6| Present | Incomplete


## Project Description

This app assists users in planning their trip to Disney World. Users will be able to select a park, and then favorite rides and restaurants within it. The app layout has two main pages, the home page and the park page. The home page will introduce the website, and allow users to click on each of the four parks. Once the user clicks a park, they will be routed to that park's page. The park page will show a map of the park, and a list of rides and restaurants fetched from an API. The user will then be able to favorite rides and restaurants. The app will include a button to allow users to see their favorited items. 


## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe.

- [Wireframe1-Home-Page-Layout](https://res.cloudinary.com/drsaojfyp/image/upload/v1539642797/S8vZXqCYQueiHU3wfRCVCg.jpg)
- [Wireframe2-Park-Page-Layout](https://res.cloudinary.com/drsaojfyp/image/upload/v1539642848/063EVTEgTOC5PXaPJNcXmQ.jpg)


## Priority Matrix

Include a full list of features that have been prioritized based on the `Time and Importance` Matix.  

- [Prority-Matrix](https://res.cloudinary.com/drsaojfyp/image/upload/v1539642897/n_a78pQjSJGBg9QPCThQ_w.jpg)

### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP 
- Home Page (including: buttons for park/routes to park page, favorite filter)
- Park Page (including: map of park, lis of rides, lis of restarurants, favorite button, favorite filter)
- CSS & Styling

#### PostMVP 
- Mobile responsive
- Finding another API to include descriptions of games and restaurants


## React Architectural Design

Define the the React components and the architectural design of your app.

- [React-Architectural-Design](https://res.cloudinary.com/drsaojfyp/image/upload/v1539645392/AQAB7KuMTTa4A5_ufXs5Kg.jpg)


## Functional Components

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component | Description | 
| --- | :---: |  
| Home Page | This is a stateful component. It includes the state of the favorites (will be passed down as props). It will fetch the API (will be passed down as props). It will include a toggle function (will be passed down as props). Will include click function to route to each park page.| 
| Favorite Bar | This is a stateful component. It includes the state of the filter (changes from all to faves). It will include an onClick to see the favorites selected. Will show list of rides rows and restaurant rows favorited. | 
| Park Page | This is a stateless component. Includes rides rows component, restaurant row component, and favorite button component. | 
| Rides Rows | This is a stateless component. Receive props from home page listing rides. | 
| Restaurant Rows | This is a stateless component. Receive props from home page listing restaurants. | 
| Favorite Button | This is a stateless component. Receive props from home page handle toggle function. A condition is used to change class with onclick. | 


Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe.

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Wire Framing | H | 3hrs| 3.5hrs | 4hrs |
| Working with API | H | 2hrs| hrs | 2hrs |
| Button for Park- Routing to Each Page | H | 4hrs| hrs | 8hrs |
| Map of Park | L | 1hr| hrs | 3hrs |
| Rides-Fetching API | H | 2hrs| hrs | 1hrs |
| Rides-Implementing Data | H | 2hrs| hrs | 2hrs |
| Restaurants-Fetching API | H | 2hrs| hrs | 30min |
| Restaurants-Implementing Data | H | 2hrs| hrs | 30min |
| Favorite Button- Click Function | H | 3hrs| hrs | 1hrs |
| Favorite Button- Changing Class Conditional | M | 4hrs| hrs | 0 |
| Favorite Filter- Change State to Show Fave | H | 3hrs| hrs | 6hrs |
| Favorite Filter- Show Rides | M | 2hrs| hrs | 0 |
| Favorite Filter- Show Restaurants | M | 2hrs| hrs | 0 |
| CSS & Styling- Home Page | H | 3hrs| 6hrs | 7hrs |
| CSS & Styling- Park Page | H | 3hrs| 4hrs | 5hrs |
| CSS & Styling- Favorite Button | M | 2hrs| hrs | 2hrs |
| CSS & Styling- Showing Fave | H | 4hrs| hrs | 30min |
| Total | H | 44hrs| hrs | 42.30hrs |

## Helper Functions
Helper functions should be generic enought that they can be reused in other applications. Use this section to document all helper functions that fall into this category.

| Function | Description | 
| --- | :---: |  
| handleFaveToggle(prop)| This will toggle between two things when called in a click function | 
| handleClick(e)| This will allow a change to occur when a div is clicked |
| updateHistory ()| This pushes the history of the route back to the home page- can create a home button with this|
| updateHistory ()| This pushes the history of the route back to the home page- can create a home button with this|

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project. 
 
 - [Disney-API](https://disneyparksapi.firebaseio.com/.json)
 - [MapBox](https://github.com/uber/react-map-gl)
 

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description  

	class MagicKingdom extends Component {

	updateHistory () {
		this.props.history.push('./')
	}

	render () {
		const land= this.props.data ? this.props.data.orlando.parks[0]: '';
		// console.log(rides)

		const rides =land.lands.map((land, i) => {
			return land.attractions ? <RidesRow 
										land = {land} 
										key = {i} 
										onFaveToggle={() => this.props.onFaveToggle()} 
										isFave = {() => this.props.faves.includes()} 
										fave={this.props.faves}
										/> : '';
		})

		const restaurants =land.lands.map((land, i) => {
			return land.dining ? <RestaurantRow 
									land = {land} 
									key ={i} 
									onFaveToggle={() => this.props.onFaveToggle(land)}
									/> : '';

		})

		const viewport= {
		   width: 300,
		   height: 200,
		   latitude: 28.4177,
		   longitude: -81.5812,
		   zoom: 14
		  }


		return (
			<div className = 'magicKingdom'>
				<nav className= 'navBar'>
						<div className= 'logo'>Walt Disney World</div>
						<div className= 'navLink'>
							<div className ="homeButton" onClick={() => this.props.history.push('/')}>Home </div>
							<div className ="faveButton">Favorites</div>
						</div>	
				</nav>
				<div className= 'parkContainer'>
					<div className= 'parkName'>
						<h1 className= 'parkTitle'>Magic Kingdom</h1>
					</div>

					<div className= 'parkHead'>
						
						<Map viewport= { viewport } />
					</div>

					<div className = 'parkPageContainer'>
						
						<div className = 'ridesDiv'>
							<div className = 'rideTitle'> Rides</div>
								{rides}
						</div>

						<div className = 'restaurantDiv'>
							<div className = 'restaurantTitle'> Dining</div>
								{restaurants}
						</div>

					</div>
				</div>
 			</div>
		)
	}
	}


## Change Log
Originally I planned to create a favorite button that allowed the user to see the rides and restaurants. I created the toggle function on the App.js, and the Fave component was too nested to be able to pass the fetched API information down. It would have taken too much time to correct this, and I decided to focus on creating the app mobile responsive instead. The user can click the fave button and see the mikey ears change as the class changes, but the fave button does not show what was clicked.

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

**ERROR**: TypeError: Cannot read property 'parks' of undefined                               
**RESOLUTION**: The API is called on in the App.js component, and therefore the app must be refreshed on the homepage as opposed to a park page.

**ERROR**: TypeError: Cannot read property 'orlando' of undefined                               
**RESOLUTION**: Create ternary function to wait for the API call- const land= this.props.data ? this.props.data.orlando.parks[0]: ''


