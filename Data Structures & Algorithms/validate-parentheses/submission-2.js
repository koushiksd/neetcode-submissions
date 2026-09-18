class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        if(s.length==1)return false
        let stack = []
        let valiedParanthisis = {
            "}":"{",
            "]":"[",
            ")":"("
        }
        for(let c of s.split("")){
            if(valiedParanthisis[c]){
                if(stack[stack.length-1]==valiedParanthisis[c]){
                   stack.pop()
                }else{
                    stack.push(c)
                }
            }else{
                stack.push(c)
            }
        }

        return stack.length==0
        
    }
}
