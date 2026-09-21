class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const cars = position
                        .map((pos, i) => [pos, (target - pos) / speed[i]])
                        .sort((a, b) => b[0] - a[0]);
        const stack = []

        for(const [_,time] of cars){
            stack.push(time);
            if (stack.length >= 2 && stack[stack.length - 1] <= stack[stack.length - 2]) {
            stack.pop();
            }
        }
        return stack.length;
    }
}
