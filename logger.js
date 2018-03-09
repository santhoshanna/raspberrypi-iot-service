/*jshint esversion: 6 */

var winston = require('winston');
var fs = require('fs');
const config = require('./config.js');


var env = process.env.ENVIRONMENT || 'develop';
var configObj = config[env+'_config'];

winston.emitErrs = true;

if (!fs.existsSync('./logs/')) {
    fs.mkdirSync('./logs/');
}
fs.writeFile('./logs/' + configObj.loggerConfig.log_filename, "", {
    flag: 'wx'
}, function(err) {});

var logger = new winston.Logger({
    transports: [
        new winston.transports.File({
            level: configObj.loggerConfig.logLevel,
            filename: './logs/' + configObj.loggerConfig.log_filename,
            handleExceptions: true,
            json: false,
            maxsize: 5242880, //5MB
            maxFiles: 5,
            colorize: false,
            timestamp: new Date(),
            meta: true
        }),
        new winston.transports.Console({
            level: configObj.loggerConfig.logLevel,
            handleExceptions: true,
            json: false,
            colorize: true,
            timestamp: new Date()
        })
    ],
    exitOnError: false
});

module.exports = logger;