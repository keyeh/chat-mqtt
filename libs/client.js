import mqtt from 'mqtt';
import {mqttConnection} from '../config/settings.json';

const opts = mqttConnection;

let environment = process.env.NODE_ENV || 'development';
let client;

if (process.env.NODE_ENV === 'development') {
  client = mqtt.connect('mqtt://localhost:3000');
}

if (process.env.NODE_ENV === 'production') {
  client = mqtt.connect({
    host: opts.host,
    port: opts.port,
    username: opts.username,
    password: opts.password,
    protocol: 'wss'
  });
}


export default client;
