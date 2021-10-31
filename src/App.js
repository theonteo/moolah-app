/*****************************************************************************/
/*!
\file App.js
\date 2021
\brief
\Not for distribution
*/
/*****************************************************************************/

import React from "react";
import { BrowserRouter as Router, Switch, Route }
  from "react-router-dom";

import './App.css';

//store all pages
import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";
//renders html
function App()
{
  return (
    <div className='main'>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/' exact component={Dashboard} />
        </Switch>
      </Router>
    </div>
  );
}


export default App;