class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let neHas = new Map()
        for(let num of nums){
            
            if(!neHas.has(num)){
                neHas.set(num,1)
            }else{
                return true
            }
        }
    
        return false
    }
}
