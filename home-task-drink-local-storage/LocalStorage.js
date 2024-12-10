export class LocalStorageClass {

    constructor(storageKey) {
        this.storageKey = storageKey;
    }

    addValue(key, value) {
        let itemsArray = JSON.parse(localStorage.getItem(this.storageKey)) || [];
        let item = itemsArray.find(k => k.key === key);
        if (item) {
            item.value = value;
        }
        else {
            itemsArray.push({ key, value });
        }
        localStorage.setItem(this.storageKey, JSON.stringify(itemsArray));
    }

    getValue(key) {
        let itemsArray = JSON.parse(localStorage.getItem(this.storageKey)) || [];
        for (let i = 0; i < itemsArray.length; i++) {
            if (itemsArray[i].key === key) {
                return itemsArray[i].value;
            }
        }

        return null;
    }

    deleteValue(key) {
        let itemsArray = JSON.parse(localStorage.getItem(this.storageKey));
        if (!itemsArray) {
            return false;
        }

        let newItemsArray = [];
        for (let i = 0; i < itemsArray.length; i++) {
            if (itemsArray[i].key !== key) {
                newItemsArray.push(itemsArray[i]);
            }
        }
        localStorage.setItem(this.storageKey, JSON.stringify(newItemsArray));

        return itemsArray.length !== newItemsArray.length;
    }

    getKeys() {
        let itemsArray = JSON.parse(localStorage.getItem(this.storageKey));
        if (!itemsArray) {
            return [];
        }

        let keysArray = [];
        for (let i = 0; i < itemsArray.length; i++) {
            keysArray.push(itemsArray[i].key);
        }

        return keysArray;
    }
}