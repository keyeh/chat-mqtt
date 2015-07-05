import React from 'react';

export class MessageItem extends React.Component {

  render() {
    return (
      <div>
        <h4>{this.props.message.user.name}</h4>
        <p>{this.props.message.message}</p>
      </div>
    );
  }

}
