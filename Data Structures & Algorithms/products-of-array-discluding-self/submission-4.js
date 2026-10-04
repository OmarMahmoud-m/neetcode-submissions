class Solution {

    productExceptSelf(nums) {
       let prod = 1;
       let zeroCnt = 0;
       for(let i = 0;i < nums.length;i++){
            if(nums[i] != 0){
                prod *= nums[i];
            }
            else{
                zeroCnt++;
            }
       }

       if(zeroCnt > 1){
            return Array(nums.length).fill(0);
       }

       let res = new Array(nums.length);
       for(let i = 0;i < nums.length;i++){
        if(zeroCnt == 1){
            if(nums[i] == 0){
                res[i] = prod;
            }
            else{
                res[i] = 0
            }
        }
        else{
            res[i] = prod / nums[i];
        }
       }
       return res;
    }

}
