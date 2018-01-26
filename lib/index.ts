import { IAddOptions, IAddTorrent, IFree, ISession, ISettings, IStats, IStatus, ITorrent, ITorrentRes } from './models';
const TransmissionLib = require('transmission');

export class SettingsConfig {
    public host: string;
    public port: number;
    public username: string;
    public password: string;
    public ssl: boolean;
    public url: string;

    constructor(settings?: ISettings) {
        this.host = (settings && 'host' in settings) ? settings.host : 'localhost';
        this.port = (settings && 'port' in settings) ? settings.port : 9091;
        this.username = (settings && 'username' in settings) ? settings.username : 'transmission';
        this.password = (settings && 'password' in settings) ? settings.password : 'transmission';
        this.ssl = (settings && 'ssl' in settings) ? settings.ssl : false;
        this.url = (settings && 'url' in settings) ? settings.url : '/transmission/rpc';

    }
}

export class Transmission {
    get status(): IStatus {
        return {
            STOPPED: 'STOPPED',
            'CHECK_WAIT': 'CHECK_WAIT',
            CHECK: 'CHECK',
            DOWNLOAD_WAIT: 'DOWNLOAD_WAIT',
            DOWNLOAD: 'DOWNLOAD',
            SEED_WAIT: 'SEED_WAIT',
            SEED: 'SEED',
            ISOLATED: 'ISOLATED',
        };
    }

    private transmission;

    constructor(settings: ISettings) {
        this.transmission = new TransmissionLib(settings);
    }

    public waitForState(id: number, target: string): Promise<ITorrent> {
        return new Promise((resolve, reject) => {
            return this.transmission.waitForState(id, target, (err, args) => {
                if (err) {
                    return reject(err);
                }
                resolve(args);
            });
        });
    }

    public remove(ids: number[], del: boolean = false): Promise<any> {
        return new Promise((resolve, reject) => {
            return this.transmission.remove(ids, del, (err, args) => {
                if (err) {
                    return reject(err);
                }
                resolve(args);
            });
        });
    }

    public active(): Promise<ITorrentRes> {
        return new Promise((resolve, reject) => {
            return this.transmission.active((err, args) => {
                if (err) {
                    return reject(err);
                }
                resolve(args);
            });
        });
    }

    public stop(ids: number[]): Promise<any> {
        return new Promise((resolve, reject) => {
            return this.transmission.stop(ids, (err, args) => {
                if (err) {
                    return reject(err);
                }
                resolve(args);
            });
        });
    }

    public start(ids: number[]): Promise<any> {
        return new Promise((resolve, reject) => {
            return this.transmission.start(ids, (err, args) => {
                if (err) {
                    return reject(err);
                }
                resolve(args);
            });
        });
    }

    public startNow(ids: number[]): Promise<any> {
        return new Promise((resolve, reject) => {
            return this.transmission.startNow(ids, (err, args) => {
                if (err) {
                    return reject(err);
                }
                resolve(args);
            });
        });
    }
    public verify(ids: number[]) {
        return new Promise((resolve, reject) => {
            return this.transmission.verify(ids, (err, args) => {
                if (err) {
                    return reject(err);
                }
                resolve(args);
            });
        });
    }
    public reannounce(ids: number[]) {
        return new Promise((resolve, reject) => {
            return this.transmission.reannounce(ids, (err, args) => {
                if (err) {
                    return reject(err);
                }
                resolve(args);
            });
        });
    }

    public session(session?: ISession) {
        return new Promise((resolve, reject) => {
            if (session) {
                return this.transmission.session(session, (err, args) => {
                    if (err) {
                        return reject(err);
                    }
                    resolve(args);
                });
            } else {
                return this.transmission.session((err, args) => {
                    if (err) {
                        return reject(err);
                    }
                    resolve(args);
                });
            }
        });
    }

    public sessionStats(): Promise<IStats> {
        return new Promise((resolve, reject) => {
            return this.transmission.sessionStats((err, args) => {
                if (err) {
                    return reject(err);
                }
                resolve(args);
            });
        });
    }

    public freeSpace(path: string): Promise<IFree> {
        return new Promise((resolve, reject) => {
            return this.transmission.freeSpace(path, (err, args) => {
                if (err) {
                    return reject(err);
                }
                resolve(args);
            });
        });
    }

    public get(ids?: number[]): Promise<ITorrent[]> {
        return new Promise((resolve, reject) => {
            if (ids) {
                this.transmission.get(ids, (err, torrents: ITorrentRes) => {
                    if (err) {
                        return reject(err);
                    }
                    resolve(torrents.torrents);
                });
            } else {
                this.transmission.get((err, torrents: ITorrentRes) => {
                    if (err) {
                        return reject(err);
                    }
                    resolve(torrents.torrents);
                });
            }
        });
    }

    public addUrl(url: string, options?: IAddOptions): Promise<IAddTorrent> {
        return new Promise((resolve, reject) => {
            if (options) {
                this.transmission.addUrl(url, options, (err, args: IAddTorrent) => {
                    if (err) {
                        return reject(err);
                    }
                    resolve(args);
                });
            } else {
                this.transmission.addUrl(url, (err, args: IAddTorrent) => {
                    if (err) {
                        return reject(err);
                    }
                    resolve(args);
                });
            }

        });
    }

    public addFile(path: string, options?: IAddOptions): Promise<IAddTorrent> {
        return new Promise((resolve, reject) => {
            if (options) {
                this.transmission.addFile(path, options, (err, args: IAddTorrent) => {
                    if (err) {
                        return reject(err);
                    }
                    resolve(args);
                });
            } else {
                this.transmission.addFile(path, (err, args: IAddTorrent) => {
                    if (err) {
                        return reject(err);
                    }
                    resolve(args);
                });
            }

        });
    }

    public addFileBase64(base64: string, options?: IAddOptions): Promise<IAddTorrent> {
        return new Promise((resolve, reject) => {
            if (options) {
                this.transmission.addBase64(base64, options, (err, args: IAddTorrent) => {
                    if (err) {
                        return reject(err);
                    }
                    resolve(args);
                });
            } else {
                this.transmission.addBase64(base64, (err, args: IAddTorrent) => {
                    if (err) {
                        return reject(err);
                    }
                    resolve(args);
                });
            }

        });
    }
}
