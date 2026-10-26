class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.arr = new MinPriorityQueue()
        this.k = k
        for(const num of nums){
            this.arr.enqueue(num)
        }
        while(this.arr.size()>k){
            this.arr.dequeue()
        }
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        this.arr.enqueue(val);
        if(this.arr.size()>this.k){
            this.arr.dequeue()
        }
        return this.arr.front()
    }
}
