import {Actions} from '../libs/actions.js';

export let ChannelActions = Actions.createActions({
  category: 'channels',
  actions: ['connect', 'addMessage', 'receiveMessage']
});
