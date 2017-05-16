export interface ISettings {
    host?: string;
    port?: number;
    username?: string;
    password?: string;
    ssl?: boolean;
    url?: string;
}
export interface IAddOptions {
    'download- dir': string;
}
export interface IFileStat {
    btesCompleted: number;
    priority: number;
    wanted: boolean;
}
export interface IFile {
    bytesCompleted: number;
    length: number;
    name: string;
}
export interface IPeersFrom {
    fromCache: number;
    fromDht: number;
    fromIncoming: number;
    fromLpd: number;
    fromLtep: number;
    fromPex: number;
    fromTracker: number;
}
export interface ITrackerStat {
    announce: string;
    announceState: number;
    downloadCount: number;
    hasAnnounced: boolean;
    hasScraped: boolean;
    host: string;
    id: number;
    isBackup: boolean;
    lastAnnouncePeerCount: number;
    lastAnnounceResult: string;
    lastAnnounceStartTime: number;
    lastAnnounceSucceeded: boolean;
    lastAnnounceTime: number;
    lastAnnounceTimedOut: boolean;
    lastScrapeResult: string;
    lastScrapeStartTime: number;
    lastScrapeSucceeded: boolean;
    lastScrapeTime: number;
    lastScrapeTimedOut: number;
    leecherCount: number;
    nextAnnounceTime: number;
    nextScrapeTime: number;
    scrape: string;
    scrapeState: number;
    seederCount: number;
    tier: number;
}
export interface ITracker {
    announce: string;
    id: number;
    scrape: string;
    tier: number;
}
export interface ITorrent {
    activityDate: number;
    addedDate: number;
    bandwidthPriority: number;
    comment: string;
    corruptEver: number;
    creator: string;
    dateCreated: number;
    desiredAvailable: number;
    doneDate: number;
    downloadDir: string;
    downloadLimit: number;
    downloadLimited: boolean;
    downloadedEver: number;
    error: number;
    errorString: string;
    eta: number;
    fileStats: IFileStat[];
    files: IFile[];
    hashString: string;
    haveUnchecked: number;
    haveValid: number;
    honorsSessionLimits: boolean;
    id: number;
    isFinished: boolean;
    isPrivate: boolean;
    leftUntilDone: number;
    magnetLink: string;
    manualAnnounceTime: number;
    maxConnectedPeers: number;
    metadataPercentComplete: number;
    name: string;
    'peer- limit': number;
    peers: any[];
    peersConnected: number;
    peersFrom: IPeersFrom;
    peersGettingFromUs: number;
    peersSendingToUs: number;
    percentDone: number;
    pieceCount: number;
    pieceSize: number;
    pieces: string;
    priorities: number[];
    rateDownload: number;
    rateUpload: number;
    recheckProgress: number;
    seedIdleLimit: number;
    seedIdleMode: number;
    seedRatioLimit: number;
    seedRatioMode: number;
    sizeWhenDone: number;
    startDate: number;
    status: number;
    torrentFile: string;
    totalSize: number;
    trackerStats: ITrackerStat[];
    trackers: ITracker[];
    uploadLimit: number;
    uploadLimited: boolean;
    uploadRatio: number;
    uploadedEver: number;
    wanted: number[];
    webseeds: any[];
    webseedsSendingToUs: number;
}
export interface ITorrentRes {
    removed: any[];
    torrents: ITorrent[];
}
export interface IAddTorrent {
    hashString: string;
    id: number;
    name: string;
}
export interface ICumulativeStat {
    downloadedBytes: number;
    filesAdded: number;
    secondsActive: number;
    sessionCount: number;
    uploadedBytes: number;
}
export interface ICurrentStat {
    downloadedBytes: number;
    filesAdded: number;
    secondsActive: number;
    sessionCount: number;
    uploadedBytes: number;
}
export interface IStats {
    activeTorrentCount: number;
    'cumulative-stats': ICumulativeStat;
    'current-stats': ICurrentStat;
    downloadSpeed: number;
    pausedTorrentCount: number;
    torrentCount: number;
    uploadSpeed: number;
}
export interface IFree {
    path: string;
    'size-bytes': number;
}
export interface IUnit {
    'memory-bytes': number;
    'memory-units': string[];
    'size-bytes': number;
    'size-units': string[];
    'speed-bytes': number;
    'speed-units': string[];
}
export interface ISession {
    'alt-speed-down': number;
    'alt-speed-enabled': boolean;
    'alt-speed-time-begin': number;
    'alt-speed-time-day': number;
    'alt-speed-time-enabled': boolean;
    'alt-speed-time-end': number;
    'alt-speed-up': number;
    'blocklist-enabled': boolean;
    'blocklist-size': number;
    'blocklist-url': string;
    'cache-size-mb': number;
    'config-dir': string;
    'dht-enabled': boolean;
    'download-dir': string;
    'download-dir-free-space': number;
    'download-queue-enabled': boolean;
    'download-queue-size': number;
    'encryption': string;
    'idle-seeding-limit': number;
    'idle-seeding-limit-enabled': boolean;
    'incomplete-dir': string;
    'incomplete-dir-enabled': boolean;
    'lpd-enabled': boolean;
    'peer-limit-global': number;
    'peer-limit-per-torrent': number;
    'peer-port': number;
    'peer-port-random-on-start': boolean;
    'pex-enabled': boolean;
    'port-forwarding-enabled': boolean;
    'queue-stalled-enabled': boolean;
    'queue-stalled-minutes': number;
    'rename-partial-files': boolean;
    'rpc-version': number;
    'rpc-version-minimum': number;
    'script-torrent-done-enabled': boolean;
    'script-torrent-done-filename': string;
    'seed-queue-enabled': boolean;
    'seed-queue-size': number;
    'seedRatioLimit': number;
    'seedRatioLimited': boolean;
    'speed-limit-down': number;
    'speed-limit-down-enabled': boolean;
    'speed-limit-up': number;
    'speed-limit-up-enabled': boolean;
    'start-added-torrents': boolean;
    'trash-original-torrent-files': boolean;
    units: IUnit;
    'utp-enabled': boolean;
    version: string;
}
export interface IStatus {
    STOPPED: string;
    CHECK_WAIT: string;
    CHECK: string;
    DOWNLOAD_WAIT: string;
    DOWNLOAD: string;
    SEED_WAIT: string;
    SEED: string;
    ISOLATED: string;
}
