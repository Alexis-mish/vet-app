const cmdk = require('cmdk');
console.log('Main Exports:', Object.keys(cmdk));
if (cmdk.Command) {
    console.log('Command Static Properties:', Object.keys(cmdk.Command));
}
