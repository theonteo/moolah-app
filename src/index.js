/*****************************************************************************/
/*!
\file index.js
\date 2021
\brief
\Not for distribution
*/
/*****************************************************************************/
import * as React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import mainTheme from './Theme/Theme';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

ReactDOM.render(
  <ThemeProvider theme={mainTheme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
