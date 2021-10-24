import path from 'path';
import WinstonDaily from 'winston-daily-rotate-file';
import winston from 'winston';

import IOHandler from './io.handler.util';
import loggerConfig from '../config/logger.config';

const { format } = winston;
const { combine, timestamp, printf, prettyPrint, colorize, errors } = format;

// Directories
const logDir = path.join(__dirname, '..', '..', 'logs');
const errorsDir = path.join(logDir, 'errors');

IOHandler.createDirs([logDir, errorsDir]);

// eslint-disable-next-line no-shadow
const logFormatter = printf((info) => {
    const log = `${info.timestamp} ${info.level}: ${info.message}`;
    return info.stack ? `${log}\n${info.stack}` : log;
});

/**
 * Config for logging errors
 */
const errorsTransport = new WinstonDaily({
    json: false,
    maxSize: '1m',
    level: 'error',
    frequency: '1h',
    dirname: errorsDir,
    handleExceptions: true,
    datePattern: 'YYYY-MM-DD',
    filename: 'errors-%DATE%.log',
});

/**
 * Config for logging other messages
 */
const logTransport = new WinstonDaily({
    json: false,
    maxSize: '1m',
    level: 'data',
    frequency: '5m',
    dirname: logDir,
    handleExceptions: true,
    datePattern: 'YYYY-MM-DD',
    filename: 'log-%DATE%.log',
});

/**
 * Config for format of log messages saved to file
 */
const logFormat = combine(
    timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.simple(),
    prettyPrint(),
    logFormatter,
    errors({ stack: true })
);

/**
 * Config for format of log messages logged to console
 */
const consoleLogFormat = combine(
    timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.simple(),
    prettyPrint(),
    logFormatter,
    colorize({ all: true }),
    errors({ stack: true })
);

const transports = [errorsTransport, logTransport];

const options = {
    levels: loggerConfig.levels,
    format: logFormat,
    transports,
};

/**
 * Add colors for different log levels
 * See: '../config/loggerConfig'
 */
winston.addColors(loggerConfig.colors);
const logger = winston.createLogger(options);

logger.add(
    new winston.transports.Console({
        level: 'data',
        format: consoleLogFormat,
    })
);

/**
 * Silence logger when running tests
 */
if (process.env.NODE_ENV !== 'test') {
    logger.add(
        new winston.transports.Console({
            level: 'data',
            format: consoleLogFormat,
        })
    );
}

const stream = {
    write: (message) => {
        logger.http(message.substring(0, message.lastIndexOf('\n')));
    },
};

export { stream, logger };
