class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        let result= [[]]
        function backTracking(index,current){
            for(let i=index;i<nums.length;i++){
                current.push(nums[i])
                result.push([...current])
               
                backTracking(i+1,current)
                 current.pop()
            }
        }
        backTracking(0,[])
        return result
    }

}
