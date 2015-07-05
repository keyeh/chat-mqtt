import React from 'react';

import {
  ChannelActions
} from '../actions/channels.js';

import {
  ChannelStore
} from '../stores/channels.js';

import {MessageList} from './message_list.jsx';
import {ChannelTitle} from './channel_title.jsx';
import {MessageInput} from './message_input.jsx';

export class Channel extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    ChannelStore.addListener(this.updateChannel.bind(this));
  }

  componentDidMount() {
    ChannelActions.connect();
  }

  componentWillUnmount() {
    ChannelStore.removeListener(this.updateChannel.bind(this));
  }

  updateChannel(channel) {
    this.setState({channel: channel});
  }

  render() {
    if (!this.state.channel) {
      return false;
    }

    return (
      <div>
        <ChannelTitle channel={this.state.channel} />
        <MessageList channel={this.state.channel} />
        <MessageInput />
      </div>
    );
  }
}
