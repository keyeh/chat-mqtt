import React from 'react';

export class ChannelTitle extends React.Component {
  render() {
    return (
      <h2>
        Channel: {this.props.channel.id}
      </h2>
    );
  }
}
