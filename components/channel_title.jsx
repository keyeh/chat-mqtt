import React from 'react';

import {
  Toolbar,
  ToolbarGroup,
  ToolbarTitle,
} from 'material-ui';

export class ChannelTitle extends React.Component {
  render() {
    return (
      <Toolbar style={this.getChannelTitleStyle()}>
        <ToolbarGroup key={0} float="left">
          <ToolbarTitle text={this.props.channel.getName()} />
        </ToolbarGroup>
      </Toolbar>
    );
  }

  getChannelTitleStyle() {
    return {
    };
  }
}
