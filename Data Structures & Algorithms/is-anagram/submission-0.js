class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length!=t.length) return false
        let newHas = new Map()

        for(let letter of s){
            if(newHas.has(letter)){
                newHas.set(letter,newHas.get(letter)+1)
            }else{
                newHas.set(letter,1)
            }
        }
        for(let lettert of t){
            if(newHas.has(lettert)){
                if(newHas.get(lettert) == 1){
                    newHas.delete(lettert)
                }else{
                    newHas.set(lettert,newHas.get(lettert)-1)
                }
            }else{
                return false
            }
        }
        return newHas.size==0?true:false
        
    }
}
