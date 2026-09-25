class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let l = 0;
        let r = heights.length - 1;
        let answer = 0;
        while(l < r){
            let width = r - l;
            let height = Math.min(heights[l], heights[r]);
            let area = width * height;
            if(area > answer){
                answer = area;
            }
            if(heights[l] > heights[r]){
                    r--;
                }
                else{
                    l++;
                }
        }
        return answer;
    }
}
