import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'redux/react';

import {MessageList} from './message_list.jsx';
import {ChannelTitle} from './channel_title.jsx';
import {MessageInput} from './message_input.jsx';
import * as ChannelActions from '../actions/channel';

export default class Chat extends React.Component {

  render() {
    const {chat, dispatch} = this.props;

    return (
      <div style={this.getChatStyle()}>
        <ChannelTitle channel={chat.channel} />
        <MessageList chat={chat} />
        <MessageInput
          {...bindActionCreators(ChannelActions, dispatch)} />
      </div>
    );
  }

  getChatStyle() {
    return {
      backgroundColor: '#EEEEEE',
      height: '100%'
    };
  }
}
