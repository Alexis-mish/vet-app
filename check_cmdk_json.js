const cmdk = require('cmdk');
console.log(JSON.stringify({
    main: Object.keys(cmdk),
    commandProps: cmdk.Command ? Object.keys(cmdk.Command) : null
}, null, 2));
