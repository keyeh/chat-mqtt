import React from 'react';
import {Paper} from 'material-ui';

import MessageSentTime from './message_sent_time.jsx';
import MessageText from './message_text.jsx';

export class MessageItem extends React.Component {

  render() {
    return (
      <div style={this.getContainerStyle()}>
        <Paper zDepth={1} style={this.getMessageStyle()}>
          <MessageText text={this.props.message.message} />
          <MessageSentTime timestamp={this.props.message.timestamp} />
        </Paper>
      </div>
    );
  }

  getMessageStyle() {
    let styles = {
      maxWidth: '70%',
      padding: '8px 12px'
    };

    if (this.props.user.isEqual(this.props.message.user)) {
      styles = {...styles,
        backgroundColor: '#F1F8E9',
        'float': 'right'
      };
    } else {
      styles = {...styles,
        backgroundColor: '#E0F7FA',
        'float': 'left'
      };
    }

    return styles;
  }

  getContainerStyle() {
    return {
      width: '100%',
      display: 'inline-block',
      margin: '4px 0'
    };
  }
}
