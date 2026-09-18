class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
       let left = 0
       let right = heights.length-1
        
       let output = 0
       while(left<right){
        let counts = right-left
        let container = Math.min(heights[left],heights[right])
        let water = counts* container
        output = Math.max(output,water)
        if(heights[left]<heights[right]){
            left++
        }else{
            right--
        }

       }
      
       return output
    }
}
