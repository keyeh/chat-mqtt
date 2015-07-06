import {
  CONNECT_CHANNEL,
  ADD_MESSAGE,
  RECEIVE_MESSAGE
} from '../constants/action_types';

import client from '../libs/client';
import Message from '../models/message';

export function connect() {
  return (dispatch, getState) => {
    const {chat:{channel, user}} = getState();

    client.on('connect', function () {
      client.subscribe(channel.id);
    });

    client.on('message', function (topic, _message) {
      let message = Message.deserialize(_message);
      dispatch(receiveMessage(message));
    });
  };
}

export function addMessage(message) {
  return {
    type: ADD_MESSAGE,
    message: message
  };
}

export function receiveMessage(message) {
  return {
    type: RECEIVE_MESSAGE,
    message: message
  };
}
