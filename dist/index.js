"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TransmissionLib = require('transmission');
class SettingsConfig {
    constructor(settings) {
        this.host = (settings && 'host' in settings) ? settings.host : 'localhost';
        this.port = (settings && 'port' in settings) ? settings.port : 9091;
        this.username = (settings && 'username' in settings) ? settings.username : 'transmission';
        this.password = (settings && 'password' in settings) ? settings.password : 'transmission';
        this.ssl = (settings && 'ssl' in settings) ? settings.ssl : false;
        this.url = (settings && 'url' in settings) ? settings.url : '/transmission/rpc';
    }
}
exports.SettingsConfig = SettingsConfig;
class Transmission {
    get status() {
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
    constructor(settings) {
        this.transmission = new TransmissionLib(settings);
    }
    waitForState(id, target) {
        return new Promise((resolve, reject) => {
            return this.transmission.waitForState(id, target, (err, args) => {
                if (err) {
                    return reject(err);
                }
                resolve(args);
            });
        });
    }
    remove(ids, del = false) {
        return new Promise((resolve, reject) => {
            return this.transmission.remove(ids, del, (err, args) => {
                if (err) {
                    return reject(err);
                }
                resolve(args);
            });
        });
    }
    active() {
        return new Promise((resolve, reject) => {
            return this.transmission.active((err, args) => {
                if (err) {
                    return reject(err);
                }
                resolve(args);
            });
        });
    }
    stop(ids) {
        return new Promise((resolve, reject) => {
            return this.transmission.stop(ids, (err, args) => {
                if (err) {
                    return reject(err);
                }
                resolve(args);
            });
        });
    }
    start(ids) {
        return new Promise((resolve, reject) => {
            return this.transmission.start(ids, (err, args) => {
                if (err) {
                    return reject(err);
                }
                resolve(args);
            });
        });
    }
    startNow(ids) {
        return new Promise((resolve, reject) => {
            return this.transmission.startNow(ids, (err, args) => {
                if (err) {
                    return reject(err);
                }
                resolve(args);
            });
        });
    }
    verify(ids) {
        return new Promise((resolve, reject) => {
            return this.transmission.verify(ids, (err, args) => {
                if (err) {
                    return reject(err);
                }
                resolve(args);
            });
        });
    }
    reannounce(ids) {
        return new Promise((resolve, reject) => {
            return this.transmission.reannounce(ids, (err, args) => {
                if (err) {
                    return reject(err);
                }
                resolve(args);
            });
        });
    }
    session(session) {
        return new Promise((resolve, reject) => {
            if (session) {
                return this.transmission.session(session, (err, args) => {
                    if (err) {
                        return reject(err);
                    }
                    resolve(args);
                });
            }
            else {
                return this.transmission.session((err, args) => {
                    if (err) {
                        return reject(err);
                    }
                    resolve(args);
                });
            }
        });
    }
    sessionStats() {
        return new Promise((resolve, reject) => {
            return this.transmission.sessionStats((err, args) => {
                if (err) {
                    return reject(err);
                }
                resolve(args);
            });
        });
    }
    freeSpace(path) {
        return new Promise((resolve, reject) => {
            return this.transmission.freeSpace(path, (err, args) => {
                if (err) {
                    return reject(err);
                }
                resolve(args);
            });
        });
    }
    get(ids) {
        return new Promise((resolve, reject) => {
            if (ids) {
                this.transmission.get(ids, (err, torrents) => {
                    if (err) {
                        return reject(err);
                    }
                    resolve(torrents.torrents);
                });
            }
            else {
                this.transmission.get((err, torrents) => {
                    if (err) {
                        return reject(err);
                    }
                    resolve(torrents.torrents);
                });
            }
        });
    }
    addUrl(url, options) {
        return new Promise((resolve, reject) => {
            if (options) {
                this.transmission.addUrl(url, options, (err, args) => {
                    if (err) {
                        return reject(err);
                    }
                    resolve(args);
                });
            }
            else {
                this.transmission.addUrl(url, (err, args) => {
                    if (err) {
                        return reject(err);
                    }
                    resolve(args);
                });
            }
        });
    }
    addFile(path, options) {
        return new Promise((resolve, reject) => {
            if (options) {
                this.transmission.addFile(path, options, (err, args) => {
                    if (err) {
                        return reject(err);
                    }
                    resolve(args);
                });
            }
            else {
                this.transmission.addFile(path, (err, args) => {
                    if (err) {
                        return reject(err);
                    }
                    resolve(args);
                });
            }
        });
    }
    addFileBase64(base64, options) {
        return new Promise((resolve, reject) => {
            if (options) {
                this.transmission.addFileBase64(base64, options, (err, args) => {
                    if (err) {
                        return reject(err);
                    }
                    resolve(args);
                });
            }
            else {
                this.transmission.addFileBase64(base64, (err, args) => {
                    if (err) {
                        return reject(err);
                    }
                    resolve(args);
                });
            }
        });
    }
}
exports.Transmission = Transmission;
