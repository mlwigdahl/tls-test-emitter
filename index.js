const fs = require('fs');
const net = require('net');

const PORT = 8123; // arbitrary, but must be same as tranceiver's input

const conn = net.connect(PORT, () => {
    console.log(`CREATED`);
});

conn.on("data", data => {
    console.log(`RECEIVED: ${data.toString()}`);
});

conn.on('error', data => {
    console.log(`ERROR: ${data}`);
});

conn.write('test string');
console.log(`SENT: test string`);