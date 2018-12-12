import React, { Component } from 'react';
import {Route, Switch, Redirect} from 'react-router-dom'

import MagicKingdom from './components/MagicKingdom'
import Epcot from './components/Epcot'
import HollywoodStudios from './components/HollywoodStudios'
import AnimalKingdom from './components/AnimalKingdom'
import Home from './components/Home'
import Media from "react-media";
import './App.css';


class App extends Component {
  state = {
    result: {},
    faves: []
  }

  componentDidMount () {
    let url = 'https://disneyparksapi.firebaseio.com/.json'
    fetch(url)
      .then(result => result.json())
      .then(data => {
       console.log(data)
        this.setState(prevState => ({
          result: data
        }))
      })
  }

    handleFaveToggle(ride) {
    const faves = this.state.faves.slice()
    const ridesIndex = this.state.faves.indexOf(ride)
    const rideName = this.state.result.orlando.park
    console.log(ridesIndex)
    this.setState(prevState => ({
          faves
      }))

      if ( ridesIndex > -1 ) {
        console.log('removing  from faves')
        faves.splice(ridesIndex, 1)
      } else {
        console.log('adding  to faves')
        console.log(rideName)
        faves.push(ride)
      }
      this.setState({faves})
  }

  render() {
    return (
      <div>
        <main>
         
          <Switch>
           
            <Route path ="/MagicKingdom" render = {(props) => <MagicKingdom {...props} data={this.state.result} onFaveToggle = {(ride) => this.handleFaveToggle(ride)} isFave = {() => this.props.faves.includes()} fave={this.state.faves}/>} />
            <Route path ="/Epcot" render = {(props) => <Epcot {...props} data={this.state.result} onFaveToggle = {(ride) => this.handleFaveToggle(ride)} fave={this.state.faves} s/>} />
            <Route path ="/AnimalKingdom" render = {(props) => <AnimalKingdom {...props} data={this.state.result} onFaveToggle = {(ride) => this.handleFaveToggle(ride)} fave={this.state.faves}/>}/>
            <Route path ="/HollywoodStudios" render = {(props) => <HollywoodStudios {...props} data={this.state.result} onFaveToggle = {(ride) => this.handleFaveToggle(ride)} fave={this.state.faves}/>} />
            <Route path ="/" component= {Home} />
           
            <Redirect to='/' />
          </Switch>
        </main>  
      </div>
    );
  }
}

export default App;