import React from 'react';

export class ChannelTitle extends React.Component {
  render() {
    return (
      <h2 style={this.getChannelTitleStyle()}>
        Channel: {this.props.channel.id}
      </h2>
    );
  }

  getChannelTitleStyle() {
    return {
      marginTop: '0'
    };
  }
}
