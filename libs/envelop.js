
export {
  serialize: function(user, message) {
    return JSON.stringify({
      user: user.serialize(),
      message: message.serialize()
    });
  },
  deserialize: function(raw) {
    let rawObject = JSON.parse(raw);
    return {
      user: rawObject.user,
      message: rawObject.message
    };
  }
};
