/*****************************************************************************/
/*!
\file App.js
\date 2021
\brief
\Not for distribution
*/
/*****************************************************************************/

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//store all pages
import Home from "./Pages/Home";
import SummaryPage from "./Pages/SummaryPage";
import SetPage from "./Pages/SetPage";
import InstructionsPage from "./Pages/InstructionsPage";
import InformationPage from "./Pages/InformationPage";

//renders html
const App: React.FC = () => {
  return (
    <div className='main'>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/Summary' exact component={SummaryPage} />
          <Route path='/Instructions' exact component={InstructionsPage} />
          <Route path='/Information' exact component={InformationPage} />
          <Route path='/Set' exact component={SetPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;