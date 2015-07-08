
export default class Channel {

  constructor(id, messages=[], participants=[]) {
    this.id = id;
    this.messages = messages;
    this.participants = participants;
  }

  static addMessage(channel, message) {
    let participants = channel.participants;

    if (!Channel.hasUser(channel, message.user)) {
      participants = [...participants, message.user];
    }

    return new Channel(
      channel.id,
      [...channel.messages, message],
      participants
    );
  }

  static hasUser(channel, user) {
    let sameUsers = channel.participants.find((_user) => {
      return _user.isEqual(user);
    });

    return typeof sameUsers !== 'undefined';
  }

  getName() {
    return this.id;
  }

}
