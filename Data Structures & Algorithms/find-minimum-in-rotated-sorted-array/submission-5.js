class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let l = 0;
        let r = nums.length - 1;
        let ans = nums[l];
        while(l <= r){
            if(nums[l] < nums[r]){
                ans = Math.min(ans,nums[l]);
                return ans;
            }
            let mid = Math.floor((l + r) / 2);
            ans = Math.min(ans,nums[mid])
            if(nums[l] <= nums[mid]){
                l = mid + 1;
            }
            else{
                r = mid - 1;
            }
            
        }
        return ans;
    }
}
