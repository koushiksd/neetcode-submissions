class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let numSets = new Set(nums)
        let longestConsecutive = 0

        for(let num of numSets ){
            if(!numSets.has(num-1)){
                let curNum  =  num
                let long = 1
                while(numSets.has(curNum + 1)){
                    curNum+=1
                    long+=1
                }
                if(longestConsecutive<long) longestConsecutive=long
            }
            
        }
        return longestConsecutive
    }

}
