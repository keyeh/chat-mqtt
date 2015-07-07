import React from 'react';

import {MessageItem} from './message_item.jsx';

export class MessageList extends React.Component {

  componentWillUpdate() {
    let node = React.findDOMNode(this);
    this.shouldScrollBottom = node.scrollTop + node.offsetHeight === node.scrollHeight;
  }

  componentDidUpdate() {
    if (this.shouldScrollBottom) {
      let node = React.findDOMNode(this);
      node.scrollTop = node.scrollHeight
    }
  }

  render() {
    const {user, channel} = this.props.chat;
    let messageList = channel.messages.map((message, index) => {
      return <MessageItem key={index} message={message} user={user} />;
    });
    return (
      <div style={this.getMessageListStyle()}>
        {messageList}
      </div>
    );
  }

  getMessageListStyle() {
    return {
      height: 'calc(100% - 100px)',
      overflow: 'scroll',
      padding: '0 8px'
    };
  }
}
