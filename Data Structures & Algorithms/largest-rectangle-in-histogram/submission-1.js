class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    //7,1,7,2,2,4
    largestRectangleArea(heights) {
        let stack =[]
        //1
        let maxArea = 0;

        const n = heights.length;

        for(let i = 0 ;i <=n ;i++){
            const currentHeight = i === n ? 0 : heights[i];
            //7
            
            while (stack.length > 0 && currentHeight < heights[stack[stack.length - 1]]) {
                const mid = stack.pop();
               
                //1
                const height = heights[mid];
                //7
                const left = stack.length > 0 ? stack[stack.length - 1] : -1;
                //1+1-1
                const width = i - left - 1;

                maxArea = Math.max(maxArea, height * width);
                
            }
            stack.push(i)
        }
        return maxArea
    }
}
