class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
   
    encode(strs) {
        if(strs.length<=0) return "-1"
        return strs.join("$#")
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if(str=="-1") return []
        return str.split("$#")
    }
}
