import {
  CONNECT_CHANNEL,
  ADD_MESSAGE,
  RECEIVE_MESSAGE,
  CREATE_CHANNEL
} from '../constants/action_types';

import createStore from '../libs/create_store';
import client from '../libs/client';
import Channel from '../models/channel';
import User from '../models/user';
import Message from '../models/message';


export default createStore({loaded: false, channel: null, user: null}, {

  [CREATE_CHANNEL]: (state, {channel, user}) => {
    return {
      loaded: true,
      channel: channel,
      user: user
    };
  },

  [ADD_MESSAGE]: (state, {message: _message}) => {
    let message = new Message(_message, state.user);
    client.publish(state.channel.id, message.serialize());
    return state;
  },

  [RECEIVE_MESSAGE]: (state, {message}) => {
    return {
      ...state,
      channel: Channel.addMessage(state.channel, message)
    };
  }
});
