export class LocalStorage {
    setItem(key: string, value: any) {
        localStorage.setItem(key, JSON.stringify(value));
    }
    getItem(key: string) {
        return JSON.parse(localStorage.getItem(key));
    }
    removeItem(key: string) {
        localStorage.removeItem(key);
    }
    clear() {
        localStorage.clear();
    }
}
