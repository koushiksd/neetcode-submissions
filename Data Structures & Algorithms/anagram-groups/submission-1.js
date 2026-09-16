class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let anagramMap = new Map()
        for (let word of strs){
            let sorted = word.split("").sort().join("")
            if(anagramMap.has(sorted)){
                anagramMap.set(sorted,[...anagramMap.get(sorted),word])
            }else{
                anagramMap.set(sorted,[word])
            }
            
        }
        return Array.from(anagramMap.values())
    }
}
