export class LocalStorageClass {

    constructor(storageKey) {
        this.storageKey = storageKey;
        this.storage = {};
        this.load();
    }

    save() {
        localStorage.setItem(this.storageKey, JSON.stringify(this.storage));
    }

    load() {
        this.storage = JSON.parse(localStorage.getItem(this.storageKey));
    }

    addValue(key, value) {
        this.storage[key] = value;
        this.save();
    }

    getValue(key) {
        return this.storage[key];
    }

    deleteValue(key) {
        if (key in this.storage) {
            delete this.storage[key];
            this.save();
            return true;
        }

        return false;
    }

    getKeys() {
        return Object.keys(this.storage);
    }
}