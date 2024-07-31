export default interface ILoggerService {
    info(message: string, ...optionalParams: any[]): void;
    warn(message: string, ...optionalParams: any[]): void;
    error(message: string, ...optionalParams: any[]): void;
    trace(message: string, ...optionalParams: any[]): void;
    debug(message?: string, ...optionalParams: any[]): void;
    fatal(message?: string, ...optionalParams: any[]): void;
}
