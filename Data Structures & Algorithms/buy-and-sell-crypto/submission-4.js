class Solution {

    maxProfit(prices) {
        let l = 0;
        let r = 1;
        let answer = 0;
        for(let i = 0;i < prices.length;i++){


            if(prices[l] > prices[r]){
                l = r;
                r++;
            }
            else if(prices[l] < prices[r]){
                if(prices[r] - prices[l] > answer){
                    answer = prices[r] - prices[l];
                }
                r++;
            }
            else{
                r++;
            }
            
        }
        return answer
    }
}
