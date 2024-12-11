export class LocalStorageClass {

    constructor(storageKey) {
        this.storageKey = storageKey;
        this.storage = JSON.parse(localStorage.getItem(this.storageKey)) || {};
    }

    addValue(key, value) {
        this.storage[key] = value;
        localStorage.setItem(this.storageKey, JSON.stringify(this.storage));
    }

    getValue(key) {
        return this.storage[key];
    }

    deleteValue(key) {
        if (key in this.storage) {
            delete this.storage[key];
            localStorage.setItem(this.storageKey, JSON.stringify(this.storage));
            return true;
        }

        return false;
    }

    getKeys() {
        return Object.keys(this.storage);
    }
}