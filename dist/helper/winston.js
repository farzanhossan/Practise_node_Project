"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { format } = require('winston');
require('winston-daily-rotate-file');
const winston_1 = require("winston");
require("winston-daily-rotate-file");
exports.commonInfo = () => {
    const info = {
        filename: `log/%DATE%-combine.log`,
        frequency: '5m',
        datePattern: 'YYYY-MM-DD-HH',
        zippedArchive: true,
        maxSize: '1k',
        maxFiles: '5',
        level: 'custom',
        levelOnly: false,
        handleExceptions: true,
        humanReadableUnhandledException: true,
    };
    return info;
};
exports.options = () => {
    const levels = {
        error: 0,
        debug: 1,
        warn: 2,
        data: 3,
        info: 4,
    };
    return levels;
};
exports.formatInfo = (fileName) => {
    return format.combine(format.label({ label: fileName }), format.ms(), format.timestamp({
        format: 'YYYY-MM-DD HH:mm:ss',
    }), format.printf((info) => `${info.level} | ${info.timestamp} | ${info.ms} | ${info.message}`));
};
class Winston {
    __errorTransport() {
        const common = exports.commonInfo();
        common.filename = `log/error-%DATE%-error.log`;
        common.level = 'error';
        return new winston_1.transports.DailyRotateFile(common);
    }
    __combineTransport() {
        const common = exports.commonInfo();
        common.filename = `log/combine-%DATE%-scheduler.log`;
        common.level = 'info';
        return new winston_1.transports.DailyRotateFile(common);
    }
    logger(fileName) {
        return winston_1.createLogger({
            levels: exports.options(),
            level: 'custom',
            format: exports.formatInfo(fileName),
            transports: [this.__errorTransport(), this.__combineTransport()],
            exitOnError: false,
        });
    }
}
exports.Winston = Winston;
