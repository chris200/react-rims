import React  from 'react';
import { init } from 'raspi';
import { Serial } from 'raspi-serial';

init(() => {
  var serial = new Serial();
  serial.open(() => {
    serial.on('data', (data) => {
      process.stdout.write(data);
    });
    serial.write('Hello from raspi-serial');
  });
});

export default Serial
