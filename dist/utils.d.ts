import { ISettings } from './models';
export declare class SettingsConfig {
    host: string;
    port: number;
    username: string;
    password: string;
    ssl: boolean;
    url: string;
    constructor(settings?: ISettings);
}
