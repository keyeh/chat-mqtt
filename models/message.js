
export class Message {

  constructor(message, user) {
    this.message = message;
    this.user = user;
  }

  static deserialize(raw) {
    let rawMessage = JSON.parse(raw);
    return new Message(rawMessage.message, rawMessage.user);
  }

  serialize() {
    return JSON.stringify({
      message: this.message,
      user: this.user.serialize()
    });
  }
}
