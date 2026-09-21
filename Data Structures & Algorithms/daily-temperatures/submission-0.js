class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        //30,38,30,36,35,40,28
        let resultArra = new Array(temperatures.length).fill(0)
        //0,0,0,0,0,0,0,
        let tempStack = []
        //0,1,2,3,4,5

        for(let temp=0;temp<temperatures.length;temp++){
           
            while(tempStack.length>0 && temperatures[temp] > temperatures[tempStack[tempStack.length - 1]]){
                    const prevDay = tempStack.pop();
                    
                    resultArra[prevDay] =temp - prevDay;
            }
            tempStack.push(temp)

        }
        return  resultArra;

    }
}
