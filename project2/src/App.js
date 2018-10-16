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
    show: true,
    data: {}
  }

  // toggleButtons = () => {
  //   this.setState(prevState => ({
  //     show: !prevState.show
  //   }))
  //   this.getData()
  // }

  // getData() {
  //   let url = 'https://disneyparksapi.firebaseio.com/.json'
  //   fetch(url)
  //     .then(result => result.json())
  //     .then(data => {
  //      console.log(data)
  //       this.setState(prevState => ({
  //         result: data
  //       }))
  //     })
  // }

  render() {
    return (
      <div>
        <main>
          
          <Switch>
           
            <Route path ="/MagicKingdom" render = {(props) => <MagicKingdom {...props}/>} />
            <Route path ="/Epcot" render = {(props) => <Epcot {...props}/>} />
            <Route path ="/AnimalKingdom" render = {(props) => <AnimalKingdom {...props} />}/>
            <Route path ="/HollywoodStudios" render = {(props) => <HollywoodStudios {...props} />} />
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
