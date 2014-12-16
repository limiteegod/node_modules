var log4js = require('log4js');

log4js.configure({
    appenders: [
        { type: 'console' },
        {
            type: 'file',
            filename: '/data/mcplog/logs/log',
            //filename: "blah.log",
            pattern: "-yyyy-MM-dd",
            maxLogSize: 10240,
            // "pattern": "-yyyy-MM-dd",
            alwaysIncludePattern: false,
            backups: 4,
            category: 'logger'
        },
    ],
    replaceConsole: true
});

module.exports = log4js.getLogger('logger');
