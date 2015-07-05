
export class User {

  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  static deserialize(raw) {
    return new User(raw.id, raw.name);
  }

  serialize() {
    return {
      id: this.id,
      name: this.name
    };
  }
}
