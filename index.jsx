import 'babel/polyfill';
import React from 'react';

import { App } from './containers';

let injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

React.render(
  <App />,
  document.getElementById('app')
);
