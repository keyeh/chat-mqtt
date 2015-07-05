var EventEmitter = require('events').EventEmitter;
let assign = require('object-assign');
var mqtt    = require('mqtt');
var client  = mqtt.connect('mqtt://localhost:3000');

import {Actions} from '../libs/actions.js';
import {ChannelActions} from '../actions/channels.js';
import {Channel} from '../models/channel.js';
import {Message} from '../models/message.js';

var CHANGE_EVENT = 'change';

export let ChannelStore = assign({}, EventEmitter.prototype, {

  initialize: function(id, user) {
    Actions.initializeStorage('channels', function() {
      return {
        channel: new Channel(id, []),
        user: user
      };
    });
  },

  _emitChange: function(channel) {
    this.emit(CHANGE_EVENT, channel);
  },

  addListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

function connectToChannel(state) {

  client.on('connect', function () {
    client.subscribe(state.channel.id);
    ChannelActions.addMessage('Hello mqtt');
  });

  client.on('message', function (topic, _message) {
    let message = Message.deserialize(_message);

    console.log('received', message);
    ChannelActions.receiveMessage(message);
  });


  return state;
}

function receiveMessage(state, message) {
  let channel = Channel.addMessage(state.channel, message);
  ChannelStore._emitChange(channel);
  return {
    channel: channel,
    user: state.user
  };
}

function addMessage(state, _message) {
  let message = new Message(_message, state.user);
  console.log('state:', state);
  client.publish(state.channel.id, message.serialize());
  return state;
}

Actions.listenActions({
  channels: {
    connect: connectToChannel,
    receiveMessage: receiveMessage,
    addMessage: addMessage
  }
});
