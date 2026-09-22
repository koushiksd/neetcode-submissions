class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        let data = {
            key, value, timestamp
        }
        if (this.keyStore.has(key)) {
            this.keyStore.get(key).push(data);
        } else {
          this.keyStore.set(key, [data]);
        }
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        let data = this.keyStore.has(key) ? this.keyStore.get(key) : null
        if (!data || data.length == 0) return ""

        let left = 0;
        let right = data.length - 1;
        let result = "";
        while (left <= right) {
            let mid = Math.floor((left + right) / 2)
            if (data[mid].timestamp <= timestamp) {
                result = data[mid].value;
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return result

    }
}
