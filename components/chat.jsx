import React from 'react';
import { connect } from 'redux/react';

import ChannelTitle from './channel_title.jsx';
import { UserContainer } from './user';
import { MessageContainer } from './message';
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
        <MessageContainer chat={chat} dispatch={dispatch} />
      );
    }

    if (currentView === USERS_VIEW) {
      content = (
        <UserContainer channel={chat.channel} />
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
