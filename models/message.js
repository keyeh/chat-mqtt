import moment from 'moment';

import User from './user.js';

export default class Message {

  constructor(message, user, timestamp) {
    this.message = message;
    this.user = user;
    this.timestamp = timestamp || moment();
  }

  static deserialize(raw) {
    let rawMessage = JSON.parse(raw);
    return new Message(
      rawMessage.message,
      new User(rawMessage.user.id, rawMessage.user.name),
      moment(rawMessage.timestamp)
    );
  }

  serialize() {
    return JSON.stringify({
      message: this.message,
      timestamp: this.timestamp.toISOString(),
      user: this.user.serialize()
    });
  }
}
