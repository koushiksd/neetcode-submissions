class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let mp = new Map()
        for(let i=0;i<nums.length;i++){
            let remainder =target- nums[i]
            if(mp.has(remainder)){
                return [mp.get(remainder),i]
            }
            mp.set(nums[i],i)
        }
        return []
    }
}
