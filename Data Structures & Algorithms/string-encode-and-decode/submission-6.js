class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
   
    encode(strs) {
        if(strs.length<=0) return "-1"
        let encoder = ""
        for(let i=0;i<strs.length;i++){

            encoder=encoder+strs[i]
            if(i!=strs.length-1){
                encoder=encoder+"$#"
            }
        }

        return encoder
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
