# node-transmission-typescript

This package is a wrapper of [node-transmission](https://github.com/FLYBYME/node-transmission) but writing in Typescript.

## Install

```sh
npm install node-transmission-typescript
```

## How to user
```
import {Transmission, SettingsConfig} from node-transmission-typescript';
```

### Module
The module contains two class

### SettingsConfig
To create the configuration for transmission.

```
new SettingsConfig(settings);
```

If dont pass arguments, create a default configuration. The configuration is an object with:
```
host: string;
port: number;
username: string;
password: string;
ssl: boolean;
url: string;
```

#### Transmission
To create a new conection with transmission. The param is the configuration created above.
```
new Transmission(settings);
```

All functions returns a promise, so you can use async/await to improve the code and all functions have a typed return.


## Methods

### property: status : IStatus

### waitForState(id: number, state: string): Promise<ITorrent>

### remove(ids: number[], del?: boolean): Promise<any>;

### active(): Promise<ITorrentRes>;

### stop(ids: number[]): Promise<any>;

### start(ids: number[]): Promise<any>;

### startNow(ids: number[]): Promise<any>;

### verify(ids: number[]): Promise<{}>;

### reannounce(ids: number[]): Promise<{}>;

### session(session?: ISession): Promise<{}>;

### sessionStats(): Promise<IStats>;

### freeSpace(path: string): Promise<IFree>;

### get(ids?: number[]): Promise<ITorrent[]>;

### addUrl(url: string, options?: IAddOptions): Promise<IAddTorrent>;

### addFile(path: string, options?: IAddOptions): Promise<IAddTorrent>;