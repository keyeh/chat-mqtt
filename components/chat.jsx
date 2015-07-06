import React from 'react';

import {MessageList} from './message_list.jsx';
import {ChannelTitle} from './channel_title.jsx';
import {MessageInput} from './message_input.jsx';

import { bindActionCreators } from 'redux';
import { connect } from 'redux/react';
import * as ChannelActions from '../actions/channel';


@connect(state => ({
  chat: state.chat
}))
export class Chat extends React.Component {
  constructor(props) {
    super(props)
    this.props.dispatch(ChannelActions.connect());
  }

  render() {
    const {chat, dispatch} = this.props;

    return (
      <div>
        <ChannelTitle channel={chat.channel} />
        <MessageList channel={chat.channel} />
        <MessageInput
          {...bindActionCreators(ChannelActions, dispatch)} />
      </div>
    );
  }
}
