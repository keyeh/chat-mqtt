import React from 'react';

// Redux
import { createRedux } from 'redux';
import { Provider } from 'redux/react';

// Router
import { Router, Route} from 'react-router';
import HashHistory from 'react-router/lib/HashHistory';

// Material UI
import mui from 'material-ui';

import { ChatContainer } from '.';
import * as stores from '../stores';

var ThemeManager = new mui.Styles.ThemeManager();
const redux = createRedux(stores);

export default class App {

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  }

  render() {
    return (
      <Provider redux={redux}>
        {renderRouter.bind(null, new HashHistory())}
      </Provider>
    );
  }
}

App.childContextTypes = {
  muiTheme: React.PropTypes.object
};

function renderRouter(history) {
  return (
    <Router history={history}>
      <Route path="/" component={ChatContainer} />
    </Router>
  );
}
