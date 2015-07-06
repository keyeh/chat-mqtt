
export default class Channel {

  constructor(id, messages) {
    this.id = id;
    this.messages = messages;
  }

  static addMessage(channel, message) {
    return new Channel(channel.id, [...channel.messages, message]);
  }

}
