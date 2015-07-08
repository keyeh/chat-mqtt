import React from 'react';
import MessageSentTime from './message_sent_time.jsx';
import MessageAuthor from './message_author.jsx';

export default class MessageTagline extends React.Component {

  render() {
    return (
      <div style={this.getStyle()}>
        <MessageAuthor author={this.props.message.user} />
        <MessageSentTime timestamp={this.props.message.timestamp} />
      </div>
    );
  }

  getStyle() {
    return {
    }
  }

}
