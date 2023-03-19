let os = require('os');

if (os.platform() != 'win32') {
    console.log('Incomplete Authentication');
} else {
  console.log(`Operating System Authenticated: ${os.platform()}`);
}
