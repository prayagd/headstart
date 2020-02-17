import React from 'react';
import Navbar from './Components/Navbar';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './Components/Home';
import Coding from './Components/Coding';
import Writing from './Components/Writing'
import Crypto from './Components/Crypto'
import Marketing from './Components/Marketing'




class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: "hello"
    }
  }
  render(){
    return (
      <BrowserRouter>
        
        <div>
          <Navbar/>
          <Switch>
            <Route exact path = "/" component = {Home}/>
            <Route path = "/Coding" component = {Coding}/>
            <Route path = "/Writing" component = {Writing}/>
            <Route path = "/Marketing" component = {Marketing}/>
            <Route path = "/Crypto" component = {Crypto}/>
          </Switch>
        </div>
        
      </BrowserRouter>
    )
  }
}

export default App;
