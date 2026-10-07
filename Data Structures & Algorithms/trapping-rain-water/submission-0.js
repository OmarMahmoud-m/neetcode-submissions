class Solution {
    
    trap(height) {
           let maxLeft = new Array (height.length); 
           let maxRight = new Array (height.length);
           maxLeft[0] = 0;
           let maxL = 0;
           for(let i = 1;i < height.length;i++){
            if(height[i - 1] >= maxL){
                maxL = height[i -1];
            }
            maxLeft[i] = maxL;
           }
           maxRight[height.length - 1] = 0;
           let maxR = 0;
           for(let i = height.length - 2;i >= 0;i--){
            if(height[i + 1] >= maxR){
                maxR = height[i + 1];
            }
            maxRight[i] = maxR;
           }

           let ans = 0;
           for(let i = 0;i < height.length;i++){
            if(Math.min(maxRight[i], maxLeft[i]) - height[i] > 0){
                ans += Math.min(maxRight[i], maxLeft[i]) - height[i];
            }
           }
           return ans; 
    }
}
