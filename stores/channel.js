import {
  CONNECT_CHANNEL,
  ADD_MESSAGE,
  RECEIVE_MESSAGE
} from '../constants/action_types';

import createStore from '../libs/create_store';
import client from '../libs/client';
import Channel from '../models/channel';
import User from '../models/user';
import Message from '../models/message';

const channel = new Channel('test', []);
const id = ~~(Math.random() * 100);
const user = new User(id, 'user_' + id);

export default createStore({channel: channel , user: user}, {

  [ADD_MESSAGE]: (state, {message: _message}) => {
    let message = new Message(_message, state.user);
    client.publish(state.channel.id, message.serialize());
    return state;
  },

  [RECEIVE_MESSAGE]: ({channel, user}, {message}) => {
    return {
      channel: Channel.addMessage(channel, message),
      user: user
    };
  }
});
