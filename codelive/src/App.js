import React, {useState} from 'react';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Redirect,Switch, Route } from 'react-router-dom';
import Htmlpre from './Pages/Htmlpre';
import Csspre from './Pages/Csspre';
import Javascriptpre from './Pages/Javascriptpre'
import Home from './Pages/Home';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route path="/home" component={Home}/>
          <Route path="/html" component ={Htmlpre} />
          <Route path="/css" component ={Csspre} />
          <Route path="/javascript" component  ={Javascriptpre} />
        </Switch>
       
      </Router>
      
    </div>
  );
}

export default App;
