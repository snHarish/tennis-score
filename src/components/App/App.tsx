import React from 'react';
//import logo from '../assets/logo.svg';
import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import ScorePage from "../ScorePage"

const App = () => {
  return (
    <Router>    
       
    <div className="App">
      <header className="App-header">    
        <div>Tennis score</div>    
      </header>
      <Switch>
        <Route exact path='/'>
          <ScorePage />
        </Route>
        <Route exact path='/score'>
          <ScorePage />
        </Route>
      </Switch>
    </div>
    </Router>
  );
 
}

export default App;
