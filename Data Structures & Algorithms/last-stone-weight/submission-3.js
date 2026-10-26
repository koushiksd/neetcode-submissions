class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        let maxQueue = new MaxPriorityQueue()

        for(let stone of stones){
            maxQueue.enqueue(stone)
        }
        while(maxQueue.size()>1){
            let smash = maxQueue.dequeue()-maxQueue.dequeue()
            if(smash>0){
                maxQueue.enqueue(smash)
            }
        }
      
        return maxQueue.size()==1?maxQueue.front():0
    }
}
