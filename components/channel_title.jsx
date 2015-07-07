import React from 'react';

import {IconButton, Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui';

export class ChannelTitle extends React.Component {
  render() {
    return (
      <Toolbar style={this.getChannelTitleStyle()}>
        <ToolbarGroup key={0} float="left">
          <IconButton iconClassName="muidocs-icon-navigation-chevron-left" />
          <ToolbarTitle text={'Channel: ' + this.props.channel.id} />
        </ToolbarGroup>
      </Toolbar>
    );
  }

  getChannelTitleStyle() {
    return {
    };
  }
}
