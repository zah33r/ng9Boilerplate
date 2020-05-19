import { Injectable } from '@angular/core';
import { LocalStorage } from './storages/local-storage/local-storage';
import { StorageType } from './storages/storage-type.enum';
import { SessionStorage } from './storages/session-storage/session-storage';
import { IndexDbStorage } from './storages/index-db/index-db-storage';

@Injectable({
    providedIn: 'root',
})
export class CacheService {
    private localStorageInstace: LocalStorage = new LocalStorage();
    private sessionStorageInstace: SessionStorage = new SessionStorage();
    private indexDBInstance: IndexDbStorage = new IndexDbStorage();

    constructor() {}

    public saveData(key: string, value: any, storageType: StorageType) {
        if (storageType === StorageType.sessionStorage) {
            this.sessionStorageInstace.setItem(key, value);
        } else if (storageType === StorageType.localStorage) {
            this.localStorageInstace.setItem(key, value);
        } else if (storageType === StorageType.indexDB) {
            // this.indexDBInstance.setItem(key, value);
        }
    }

    public removeData(key: string, value: any, storageType: StorageType) {
        if (storageType === StorageType.sessionStorage) {
            this.sessionStorageInstace.removeItem(key);
        } else if (storageType === StorageType.localStorage) {
            this.localStorageInstace.removeItem(key);
        } else if (storageType === StorageType.indexDB) {
            // this.indexDBInstance.removeItem(key, value);
        }
    }
}
