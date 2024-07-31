import { LogLevel } from './log-level';
import { LoggerConfig } from './logger-config';

export class BaseLogger {
    protected _config: LoggerConfig;
    protected readonly _minLogLevel: LogLevel;

    constructor(config: LoggerConfig) {
        this._config = config;
        this._minLogLevel = config.logLevel;
    }
}
