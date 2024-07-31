import { Inject, Injectable } from '@angular/core';

import { BaseLogger } from './base-logger';
import ILoggerService from './i-logger-service';
import { LogLevel } from './log-level';
import { LoggerConfig } from './logger-config';

@Injectable({
    providedIn: 'root'
})
export class ConsoleLoggerService extends BaseLogger implements ILoggerService {
    private static readonly LogLevelStrings: { [s: string]: string } = {
        [LogLevel.Trace]: 'TRC',
        [LogLevel.Debug]: 'DBG',
        [LogLevel.Information]: 'INF',
        [LogLevel.Warning]: 'WRN',
        [LogLevel.Error]: 'ERR',
        [LogLevel.Critical]: 'CRT'
    };
    private static readonly Loggers: { [logLevel: number]: (message: any, optionalParams: any[]) => void } = {
        [LogLevel.Trace]: (message: any, optionalParams: any[]) => console.trace(message, ...optionalParams),
        [LogLevel.Debug]: (message: any, optionalParams: any[]) => console.debug(message, ...optionalParams),
        [LogLevel.Information]: (message: any, optionalParams: any[]) => console.info(message, ...optionalParams),
        [LogLevel.Warning]: (message: any, optionalParams: any[]) => console.warn(message, ...optionalParams),
        [LogLevel.Error]: (message: any, optionalParams: any[]) => console.error(message, ...optionalParams),
        [LogLevel.Critical]: (message: any, optionalParams: any[]) => console.error(message, ...optionalParams)
    };

    constructor(@Inject('LOGGING_CONFIG') _config: LoggerConfig) {
        super(_config);
    }

    trace(message?: string, ...optionalParams: any[]): void {
        this._log(LogLevel.Trace, message, ...optionalParams);
    }

    debug(message?: string, ...optionalParams: any[]): void {
        this._log(LogLevel.Debug, message, ...optionalParams);
    }

    info(message?: string, ...optionalParams: any[]): void {
        this._log(LogLevel.Information, message, ...optionalParams);
    }

    warn(message?: string, ...optionalParams: any[]): void {
        this._log(LogLevel.Warning, message, ...optionalParams);
    }

    error(message?: string, ...optionalParams: any[]): void {
        this._log(LogLevel.Error, message, ...optionalParams);
    }

    fatal(message?: string, ...optionalParams: any[]): void {
        this._log(LogLevel.Critical, message, ...optionalParams);
    }

    private _log(logLevel: LogLevel, message?: string, ...optionalParams: any[]): void {
        if (logLevel >= this._minLogLevel) {
            const logger = ConsoleLoggerService.Loggers[logLevel];
            if (logger) {
                logger(`${this._getLogMessagePrefix(logLevel)} ${message}`, optionalParams);
            }
        }
    }

    private _getLogMessagePrefix(logLevel: LogLevel) {
        return `[${new Date().toISOString().slice(11, 19)} ${ConsoleLoggerService.LogLevelStrings[logLevel]}]`;
    }
}
