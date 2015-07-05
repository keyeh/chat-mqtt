import React from 'react';

import {MessageItem} from './message_item.jsx';

export class MessageList extends React.Component {

  render() {
    let messageList = this.props.channel.messages.map((message, index) => {
      return <MessageItem key={index} message={message} />;
    });
    return (
      <div>
        {messageList};
      </div>
    );
  }

}
