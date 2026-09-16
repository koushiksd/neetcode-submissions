class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */

    isPalindrome(s) {
        let reg=/^[A-Za-z0-9]+$/
        let left = 0
        let right = s.length-1
        while(left<right){
           
            
            if(!reg.test(s[left]))  {
                left++ 
                continue
            }
            if(!reg.test(s[right])) {
                right--
                continue
            }
            console.log(s[left],s[right])
            if(s[left].toLowerCase()!=s[right].toLowerCase()){
                return false
            }
            left++
            right--

        }
        return true
    }
}
