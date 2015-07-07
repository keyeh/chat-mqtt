
export default class User {

  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  static deserialize(raw) {
    return new User(raw.id, raw.name);
  }

  isEqual(user) {
    return this.id === user.id;
  }

  serialize() {
    return {
      id: this.id,
      name: this.name
    };
  }
}
