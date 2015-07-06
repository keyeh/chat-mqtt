import mqtt from 'mqtt';

let client = mqtt.connect('mqtt://localhost:3000');

export default client;
