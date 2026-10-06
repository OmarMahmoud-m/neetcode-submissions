class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let sequence = new Set(nums);
        let longestSubsequence = 0;

        for(const num of sequence){
            if(!sequence.has( num - 1)){
                let length = 1;
                while(sequence.has(num + length)){
                    length++;
                }
                longestSubsequence = Math.max(longestSubsequence, length);
            }
        }
        return longestSubsequence;

    }
}
