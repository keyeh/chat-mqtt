import React from 'react';

import {
  List,
  ListItem
} from 'material-ui';

export default class UserList extends React.Component {

  render() {
    let items = this.props.channel.participants.map((user) => {
      return (
        <ListItem>{user.name}</ListItem>
      );
    });

    return (
      <List style={this.getStyle()}>
        {items}
      </List>
    );
  }

  getStyle() {
    return {
    }
  }

}
