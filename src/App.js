import React from 'react';
import { Switch, HashRouter, Route } from 'react-router-dom';
import About from './views/About';
import Home from './views/Home';
import './App.css';



class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  render(){
    return (
      <HashRouter>
        <Switch>
          <Route exact component={Home} path="/" />
          <Route component={About} path="/About" />
        </Switch>
      </HashRouter>
    );
  }
}




export default App;
