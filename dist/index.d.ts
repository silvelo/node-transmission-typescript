import { IAddOptions, IAddTorrent, IFree, ISession, ISettings, IStats, IStatus, ITorrent, ITorrentRes } from './models';
export declare class SettingsConfig {
    host: string;
    port: number;
    username: string;
    password: string;
    ssl: boolean;
    url: string;
    constructor(settings?: ISettings);
}
export declare class Transmission {
    readonly status: IStatus;
    private transmission;
    constructor(settings: ISettings);
    waitForState(id: number, target: string): Promise<ITorrent>;
    remove(ids: number[], del?: boolean): Promise<any>;
    active(): Promise<ITorrentRes>;
    stop(ids: number[]): Promise<any>;
    start(ids: number[]): Promise<any>;
    startNow(ids: number[]): Promise<any>;
    verify(ids: number[]): Promise<{}>;
    reannounce(ids: number[]): Promise<{}>;
    session(session?: ISession): Promise<{}>;
    sessionStats(): Promise<IStats>;
    freeSpace(path: string): Promise<IFree>;
    get(ids?: number[]): Promise<ITorrent[]>;
    addUrl(url: string, options?: IAddOptions): Promise<IAddTorrent>;
    addFile(path: string, options?: IAddOptions): Promise<IAddTorrent>;
}
