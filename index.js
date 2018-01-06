const Debug = require('debug');

let loggerName = null;
e = new Error();
const stacks = e.stack.split('\n');
stacks.forEach(function (line) {
    if (line.indexOf('debug-server/index.js') == -1 && loggerName == null) {
        let folder = line.match(/.*\/(.*)\//);
        if (folder != null && folder.length > 1) {
            folder = folder[1];
            let fn = line.match(/(\w+\.\w+)/);
            if (fn != null && fn.length > 1) {
                loggerName = folder + '/' + fn[1];
            }
        }
    }
});
if (loggerName == null) {
    console.debug('debug-server: couldn\'t not get default logger name');
    loggerName = '';
} else {
    loggerName = loggerName + ':';
}

module.exports = {
    debug: Debug(loggerName + 'DEBUG'),
    info: Debug(loggerName + 'INFO'),
    warning: Debug(loggerName + 'WARNING'),
    error: Debug(loggerName + 'ERROR')
}
