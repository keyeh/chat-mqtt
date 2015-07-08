import React from 'react';

import {
  DropDownMenu
} from 'material-ui';

import {
  CHAT_VIEW,
  USERS_VIEW
} from '../constants/views.js';


export default class ViewSwitcher extends React.Component {

  render() {
    const options = [
      {payload: CHAT_VIEW, text: 'Chat'},
      {payload: USERS_VIEW, text: 'Users'}
    ];

    return (
      <DropDownMenu
        label="More"
        menuItems={options}
        onChange={this.props.onUpdateView} />
    );
  }

  getStyle() {
    return {
    };
  }

}
