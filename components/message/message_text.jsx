
import React from 'react';

export default class MessageText extends React.Component {

  render() {
    return (
      <div style={this.getMessageTextStyle()}>
        {this.props.text}
      </div>
    );
  }

  getMessageTextStyle() {
    return {
      margin: '0 0 6px 0',
      color: '#212121'
    };
  }
}
