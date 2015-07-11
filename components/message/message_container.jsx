import { bindActionCreators } from 'redux';

import * as ChannelActions from '../../actions/channel';

import MessageList from './message_list.jsx';
import MessageInput from './message_input.jsx';

import React from 'react';

export default class MessageContainer extends React.Component {

  render() {
    const {chat, dispatch} = this.props;

    return (
      <div>
        <MessageList chat={chat} />
        <MessageInput
          {...bindActionCreators(ChannelActions, dispatch)} />
      </div>
    );
  }

}
