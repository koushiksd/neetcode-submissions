class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {

        let n = nums.length
        let output = new Array(n)
        let prefix = 1
        for(let i=0;i<n;i++){
            output[i] = prefix;
            prefix *= nums[i];
        }
        //[1,2,4,6]
        //[1,1,2,8]
        let postfix = 1 ; // 48
        for (let i = n - 1; i >= 0; i--) {
            //0
            output[i] *= postfix;
            postfix *= nums[i];
        }
        //[48, 24, 12, 8]
        
        return output;
    }
}
