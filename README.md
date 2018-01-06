# debug-server
An extension to the famous 'debug' npm package that defines automatically some 'loggers' for the class importing it.

## Usage examples
```
const {debug, info, warning, error} = require('debug-server');

debug('oh, my');

info('just some information from our fellows...');

warning('there is a clif just a few steps fr...');

error('we couldn\'t advise that poor guy along the clif in time...');
```