class Solution {
    threeSum(nums) {
         nums.sort((a,b) => a - b);
         const answer = [];

         for(let i = 0; i < nums.length;i++){
            if (nums[i] > 0) break;
            if(i > 0 && nums[i] == nums[i - 1]){
                continue;
            }

            let l = i + 1;
            let r = nums.length - 1;

            while(l < r){
                let threeSum = nums[i] + nums[l] + nums[r];
                if(threeSum > 0){
                    r--;
                }
                else if(threeSum < 0){
                    l++;
                }
                else{
                    answer.push([nums[i], nums[l], nums[r]]);
                    l++;
                    r--;
                    while(l < r && nums[l] == nums[l - 1]){
                        l++;
                    }
                }
            }
         }
         return answer; 
    }
}