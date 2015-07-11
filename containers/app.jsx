import React from 'react';
import { createRedux } from 'redux';
import { Provider } from 'redux/react';
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
        {() => <ChatContainer />}
      </Provider>
    );
  }
}

App.childContextTypes = {
  muiTheme: React.PropTypes.object
};
