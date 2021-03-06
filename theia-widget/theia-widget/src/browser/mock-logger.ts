
import { ILogger, Loggable } from '@theia/core';
import { injectable } from 'inversify';

@injectable()
export class MockLogger implements ILogger {

    setLogLevel(logLevel: number): Promise<void> {
        return Promise.resolve();
    }

    getLogLevel(): Promise<number> {
        return Promise.resolve(0);
    }

    isEnabled(logLevel: number): Promise<boolean> {
        return Promise.resolve(true);
    }

    ifEnabled(logLevel: number): Promise<void> {
        return Promise.resolve();
    }

    log(logLevel: number, arg2: string | Loggable | Error, ...params: any[]): Promise<void> {
        return Promise.resolve();
    }

    isTrace(): Promise<boolean> {
        return Promise.resolve(true);
    }

    ifTrace(): Promise<void> {
        return Promise.resolve();
    }
    trace(arg: string | Loggable, ...params: any[]): Promise<void> {
        return Promise.resolve();
    }

    isDebug(): Promise<boolean> {
        return Promise.resolve(true);
    }

    ifDebug(): Promise<void> {
        return Promise.resolve();
    }

    debug(arg: string | Loggable, ...params: any[]): Promise<void> {
        return Promise.resolve();
    }

    isInfo(): Promise<boolean> {
        return Promise.resolve(true);
    }

    ifInfo(): Promise<void> {
        return Promise.resolve();
    }

    info(arg: string | Loggable, ...params: any[]): Promise<void> {
        return Promise.resolve();
    }

    isWarn(): Promise<boolean> {
        return Promise.resolve(true);
    }

    ifWarn(): Promise<void> {
        return Promise.resolve();
    }

    warn(arg: string | Loggable, ...params: any[]): Promise<void> {
        return Promise.resolve();
    }

    isError(): Promise<boolean> {
        return Promise.resolve(true);
    }

    ifError(): Promise<void> {
        return Promise.resolve();
    }
    error(arg: string | Loggable | Error, ...params: any[]): Promise<void> {
        return Promise.resolve();
    }

    isFatal(): Promise<boolean> {
        return Promise.resolve(true);
    }

    ifFatal(): Promise<void> {
        return Promise.resolve();
    }

    fatal(arg: string | Loggable, ...params: any[]): Promise<void> {
        return Promise.resolve();
    }

    child(obj: Object): ILogger {
        return this;
    }
}
