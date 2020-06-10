import React from 'react';
import { Switch, HashRouter, Route } from 'react-router-dom';
import Login from './views/Login';





class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  render(){
    return (
      <div>
        <HashRouter>
          <Switch>
            <Route exact component={Login} path="/" />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}




export default App;
