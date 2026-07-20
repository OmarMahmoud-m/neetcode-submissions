class Solution {
    twoSum(nums, target) {
        const map = new Map();
        for(let i = 0;i < nums.length ;i++){
            const diffrence = target - nums[i];
            if(map.has(diffrence)){
                return[map.get(diffrence), i]
            }
            map.set(nums[i], i)
        }
    }
}
