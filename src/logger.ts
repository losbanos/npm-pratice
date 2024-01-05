import {v4} from 'uuid';

type LevelType = 'Debug' | 'Info' | 'Error';
function log(level: LevelType, message: string) {
    process.stdout.write(`${level}: ${message} \n`);
}
export class Logger {
    debug(message: string) {
        log('Debug', message);
    }

    info(message: string) {
        log('Info', message);
    }

    error(message: string) {
        log('Error', message);
    }

    infoWithId(message: string) {
        log('Info', `${v4()} ${message}`);
    }
}