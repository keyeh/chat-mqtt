import React from 'react';
import { connect } from 'redux/react';

import Chat from '../components/chat.jsx';
import * as ChannelActions from '../actions/channel';

import Channel from '../models/channel';
import User from '../models/user';

@connect(state => ({
  chat: state.chat
}))
export default class ChatContainer extends React.Component {

  constructor(props) {
    super(props)

    const channel = new Channel('test', []);
    const id = ~~(Math.random() * 100);
    const user = new User(id, 'user_' + id);

    this.props.dispatch(ChannelActions.initialize(channel, user));
  }

  render() {
    const {chat, dispatch} = this.props;

    if (!chat.loaded) {
      return false;
    }

    return (
      <Chat chat={chat} dispatch={dispatch} />
    );
  }
}
