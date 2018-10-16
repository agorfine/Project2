# Project Overview

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Project Description | Complete
|Day 2| Wireframes / Priority Matrix / Functional Components | Complete
|Day 3| Home Page | Incomplete
|Day 4| Pseudocode / JSX MVP | Incomplete
|Day 5| Full Working App / Post MVP  | Incomplete
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
| Whire Framing | H | 3hrs| 3.5hrs | 4hrs |
| Working with API | H | 2hrs| hrs | hrs |
| Button for Park | H | 4hrs| hrs | hrs |
| Map of Park | L | 1hr| hrs | hrs |
| Rides-Fetching API | H | 2hrs| hrs | hrs |
| Rides-Implementing Data | H | 2hrs| hrs | hrs |
| Restaurants-Fetching API | H | 2hrs| hrs | hrs |
| Restaurants-Implementing Data | H | 2hrs| hrs | hrs |
| Favorite Button- Click Function | H | 3hrs| hrs | hrs |
| Favorite Button- Changing Class Conditional | M | 4hrs| hrs | hrs |
| Favorite Filter- Change State to Show Fave | H | 3hrs| hrs | hrs |
| Favorite Filter- Show Rides | M | 2hrs| hrs | hrs |
| Favorite Filter- Show Restaurants | M | 2hrs| hrs | hrs |
| CSS & Styling- Home Page | H | 3hrs| hrs | hrs |
| CSS & Styling- Park Page | H | 3hrs| hrs | hrs |
| CSS & Styling- Favorite Button | M | 2hrs| hrs | hrs |
| CSS & Styling- Showing Fave | H | 4hrs| hrs | hrs |
| Total | H | 38hrs| hrs | hrs |

## Helper Functions
Helper functions should be generic enought that they can be reused in other applications. Use this section to document all helper functions that fall into this category.

| Function | Description | 
| --- | :---: |  
| Capitalize | This will capitalize the first letter in a string of text | 

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project. 

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description  

```
function reverse(string) {
  // here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object
