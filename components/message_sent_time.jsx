import React from 'react';

export default class MessageSentTime extends React.Component {

  render() {
    return (
      <div style={this.getMessageSentTimeStyle()}>
        {this.props.timestamp.fromNow()}
      </div>
    );
  }

  getMessageSentTimeStyle() {
    return {
      margin: '0',
      fontSize: '12px',
      color: '#757575',
      fontWeight: '200'
    };
  }
}
