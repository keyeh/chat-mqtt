import React from 'react';

export class MessageItem extends React.Component {

  render() {
    return (
      <div>
        <h4>{this.props.message.user.name}</h4>
        <h6>{this.props.message.timestamp.fromNow()}</h6>
        <p>{this.props.message.message}</p>
      </div>
    );
  }

}
