"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
