import React from 'react';

import {
  Toolbar,
  ToolbarGroup,
  ToolbarTitle,
} from 'material-ui';

import ViewSwitcher from './view_switcher.jsx';


export default class ChannelTitle extends React.Component {

  render() {
    return (
      <Toolbar style={this.getChannelTitleStyle()}>
        <ToolbarGroup key={0} float="left">
          <ToolbarTitle text={this.props.channel.getName()} />
        </ToolbarGroup>
        <ToolbarGroup key={1} float="right">
          <ViewSwitcher onUpdateView={this.props.onUpdateView} />
        </ToolbarGroup>
      </Toolbar>
    );
  }

  getChannelTitleStyle() {
    return {
    };
  }

}
