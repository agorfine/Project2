import React, { Component } from 'react';
import {Route, Switch, Redirect} from 'react-router-dom'

import MagicKingdom from './components/MagicKingdom'
import Epcot from './components/Epcot'
import HollywoodStudios from './components/HollywoodStudios'
import AnimalKingdom from './components/AnimalKingdom'
import Home from './components/Home'

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

    handleFaveToggle(film) {
    const faves = this.state.faves.slice()
    const ridesIndex = this.state.faves.indexOf(film)
    console.log(ridesIndex)
    this.setState(prevState => ({
          faves
      }))

      if ( ridesIndex > -1 ) {
        console.log('removing  from faves')
        faves.splice(ridesIndex, 1)
      } else {
        console.log('adding  to faves')
        faves.push(this.state.result.land)
      }
      this.setState({faves})
  }

  render() {
    return (
      <div>
        <main>
          <nav>

          </nav>
          
          <Switch>
           
            <Route path ="/MagicKingdom" render = {(props) => <MagicKingdom {...props} data={this.state.result} onFaveToggle = {(ride) => this.handleFaveToggle(ride)} isFave = {() => this.props.faves.includes()}/>} />
            <Route path ="/Epcot" render = {(props) => <Epcot {...props} data={this.state.result} onFaveToggle = {(ride) => this.handleFaveToggle(ride)} onFaveToggle = {(ride) => this.handleFaveToggle(ride)} isFave = {() => this.props.faves.includes()}/>} />
            <Route path ="/AnimalKingdom" render = {(props) => <AnimalKingdom {...props} data={this.state.result} onFaveToggle = {(ride) => this.handleFaveToggle(ride)} onFaveToggle = {(ride) => this.handleFaveToggle(ride)} isFave = {() => this.props.faves.includes()}/>}/>
            <Route path ="/HollywoodStudios" render = {(props) => <HollywoodStudios {...props} data={this.state.result} onFaveToggle = {(ride) => this.handleFaveToggle(ride)} onFaveToggle = {(ride) => this.handleFaveToggle(ride)} isFave = {() => this.props.faves.includes()}/>} />
            <Route path ="/" component= {Home} />
           
            <Redirect to='/' />
          </Switch>
        </main>  
      </div>
    );
  }
}

export default App;




          // <Route path ="/MagicKingdom" render = {(props) => <MagicKingdom {...props} data={this.state.result.orlando}/>} />
          //   <Route path ="/Epcot" render = {(props) => <Epcot {...props} data={this.state.result}/>} />
          //   <Route path ="/AnimalKingdom" render = {(props) => <AnimalKingdom {...props} data={this.state.result}/>}/>
          //   <Route path ="/HollywoodStudios" render = {(props) => <HollywoodStudios {...props} data={this.state.result}/>} />
          //   <Route path ="/" component= {Home} />