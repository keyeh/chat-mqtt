# chat-mqtt
Chat

## Usage

All scripts are in the `package.json`

By default it will run in `production`. This can be changed to `development` in the NODE_ENV (check envify in package.json).

### Production mqtt server

- Create account in http://www.cloudmqtt.com/
- Make a new instance
- Create a new user
- Give ACL rules for all topics (#) for new User
- `cp config/settings.default.json config/settings.json`
- Update `config/settings.json` with the user info

### Development mqtt server

- `npm run mosca`

## Roadmap

- Protocol for indicating if a user is connected
