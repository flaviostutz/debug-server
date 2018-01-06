# debug-server
An extension to the famous 'debug' npm package that defines automatically some 'loggers' for the class importing it.

## Features

```
const {debug, info, warning, error} = require('debug-server');
```

With this module, loggers are named by '[last directory]/[file name]:[log level]'. So, if a file placed on '/src/module1/worker1.js' imports this module, debug('test!') will output 'module1/worker1.js:DEBUG test!'.

You can configure log levels by DEBUG=module1/worker1.js:* or DEBUG=*:-DEBUG, for example.

As this is just an extension, see https://github.com/visionmedia/debug for full features.

## Usage examples
```
const {debug, info, warning, error} = require('debug-server');

debug('oh, my');

info('just some information from our fellows...');

warning('there is a clif just a few steps fr...');

error('we couldn\'t advise that poor guy along the clif in time...');
```

Output:

```
  debug-server/test.js:DEBUG oh, my +0ms

  debug-server/test.js:INFO just some information from our fellows... +0ms

  debug-server/test.js:WARNING there is a clif just a few steps fr... +0ms

  debug-server/test.js:ERROR we couldn't advise that poor guy along the clif in time... +0ms
```