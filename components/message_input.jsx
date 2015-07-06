import React from 'react';

import {
  ChannelActions
} from '../actions/channels.js';

const ENTER_KEY = 13;

export class MessageInput extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      message: ''
    };
  }

  render() {
    return (
      <div>
        <input value={this.state.message}
          onKeyDown={this._onKeyDown.bind(this)}
          onChange={this._onChange.bind(this)} />
      </div>
    );
  }

  _onChange(event) {
    this.setState({
      message: event.target.value
    });
  }

  _onKeyDown(event) {
    if(event.keyCode === ENTER_KEY) {
      this.props.addMessage(event.target.value);
      this.setState({message: ''});
    }
  }
}
