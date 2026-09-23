class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let cleanStr = s.toLowerCase().replace(/[^a-z0-9]/g, "")
        let last = cleanStr.length - 1;
        let begin = 0;
        while(begin <= last){
            if(cleanStr[last] != cleanStr[begin]){
                return false;
            }
            begin++;
            last--;
        }
        return true;
    }
}
