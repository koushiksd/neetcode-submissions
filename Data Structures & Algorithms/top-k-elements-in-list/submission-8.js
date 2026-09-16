class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let hasMap = new Map()

        for(let num of nums){
            if(hasMap.has(num)){
                hasMap.set(num,hasMap.get(num)+1)
            }else{
                hasMap.set(num,1)
            }
        }

        return  Array.from(hasMap.entries()).sort((a,b)=>b[1]-a[1]).slice(0,k)  .map(entry => entry[0]);
    }
}
