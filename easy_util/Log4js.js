var log4js = require('log4js');

log4js.configure({
    appenders: [
        { type: 'console' , category: 'console'},
        {
            type: 'dateFile',
            filename: '/data/mcplog/logs/log',
            //filename: "blah.log",
            pattern: "_yyyy-MM-dd",
            maxLogSize: 10240,
            // "pattern": "-yyyy-MM-dd",
            alwaysIncludePattern: false,
            backups: 2,
            category: 'logInfo'
        },
        {
            type: 'dateFile',
            filename: '/data/mcplog/logs/errlog',
            pattern: "_yyyyMMdd",
            maxLogSize: 10240,
            alwaysIncludePattern: false,
            backups: 2,
            category: 'logErr'
        },
    ],
    replaceConsole: true
});

module.exports = log4js.getLogger('logger');
