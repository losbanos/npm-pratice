import {Logger} from './logger';
import 'dotenv/config';
// import path from 'path';
// dotenv.config({path: path.resolve('/.env')});
console.log('secret = ', process.env.secret);
export {
    Logger
}