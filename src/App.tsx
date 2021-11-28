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
import { ThemeProvider, createTheme } from '@mui/material/styles';
const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});
//renders html
const App: React.FC = () => {
  return (
    <div className='main'>
      <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/Summary' exact component={SummaryPage} />
        </Switch>
      </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;