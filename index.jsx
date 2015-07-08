import 'babel/polyfill';

import React from 'react';
let injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

import App from './containers/app.jsx';


React.render(
  <App />,
  document.getElementById('app')
);
