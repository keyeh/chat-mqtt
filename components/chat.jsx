import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'redux/react';

import MessageList from './message_list.jsx';
import ChannelTitle from './channel_title.jsx';
import MessageInput from './message_input.jsx';
import UserList from './user_list.jsx';
import * as ChannelActions from '../actions/channel';

import {
  CHAT_VIEW,
  USERS_VIEW
} from '../constants/views.js';

export default class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: CHAT_VIEW
    };
  }

  render() {
    const {chat, dispatch} = this.props;
    const currentView = this.state.currentView;
    let content;

    if (currentView === CHAT_VIEW) {
      content = (
        <div>
          <MessageList chat={chat} />
          <MessageInput
            {...bindActionCreators(ChannelActions, dispatch)} />
        </div>
      );
    }

    if (currentView === USERS_VIEW) {
      content = (
        <UserList channel={chat.channel} />
      );
    }

    return (
      <div style={this.getChatStyle()}>
        <ChannelTitle channel={chat.channel}
          onUpdateView={this.onUpdateView.bind(this)} />
        {content}
      </div>
    );
  }

  onUpdateView(event, object, {payload}) {
    this.setState({
      currentView: payload
    });
  }

  getChatStyle() {
    return {
      backgroundColor: '#EEEEEE',
      height: '100%'
    };
  }
}
