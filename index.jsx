import React from 'react';

import {
  Channel
} from './components/channel.jsx';

import {
  ChannelStore
} from './stores/channels.js'

import {
  User
} from './models/user.js'

let id = ~~(Math.random() * 100);
let user = new User(id, 'user_' + id);

ChannelStore.initialize('test', user);

React.render(
  <Channel />,
  document.getElementById('app')
);
