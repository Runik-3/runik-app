import dotenv from 'dotenv';

import { logger } from './logger.util';
import IOHandler from './io.handler.util';

if (IOHandler.dirExists('.env')) {
    logger.info(
        'In development: Using .env file to supply config environment variables'
    );
    dotenv.config({ path: '.env' });
} else {
    logger.warn('In production: ensure all ENV variables are accessible');
}

export const PORT = process.env.PORT || 8080;
// const MONGODB_URI = process.env.MONGO_DB_URI;
export const ENVIRONMENT = process.env.NODE_ENV || 'development';
// const { SESSION_SECRET } = process.env;

// const { AWS_BUCKET, AWS_ACCESS_KEY, AWS_SECRET_KEY } = process.env;

// const SALT_ROUNDS = 10;
// const SESS_NAME = 'sid';
// const MAX_COOKIE_AGE = 0.5 * 60 * 60 * 1000; // 0.5 hr
// const COOKIE_OPTS = {
//     secure: ENVIRONMENT === 'production',
//     httpOnly: true,
//     sameSite: 'strict',
//     maxAge: MAX_COOKIE_AGE,
// };

// const SESSION_OPTS = {
//     name: SESS_NAME,
//     secret: SESSION_SECRET,
//     resave: false,
//     proxy: true,
//     saveUninitialized: false,
//     cookie: COOKIE_OPTS,
// };
