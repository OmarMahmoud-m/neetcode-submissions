class Solution {

    maxProfit(prices) {
        let answer = 0;
        for(let i = 0;i < prices.length;i++){
            for(let j = i+1;j < prices.length;j++){
                if(prices[j] - prices[i] > answer){
                    answer = prices[j] - prices[i];
                }
            }
        }
        return answer
    }
}
