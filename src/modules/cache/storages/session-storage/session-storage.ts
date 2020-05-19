export class SessionStorage {
    setItem(key: string, value: any) {
        sessionStorage.setItem(key, JSON.stringify(value));
    }
    getItem(key: string) {
        return JSON.parse(sessionStorage.getItem(key));
    }
    removeItem(key: string) {
        sessionStorage.removeItem(key);
    }
    clear() {
        sessionStorage.clear();
    }
}
