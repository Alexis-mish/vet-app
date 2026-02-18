const cmdk = require('cmdk');
console.log(Object.keys(cmdk));
if (cmdk.Command) {
    console.log('Command keys:', Object.keys(cmdk.Command));
}
