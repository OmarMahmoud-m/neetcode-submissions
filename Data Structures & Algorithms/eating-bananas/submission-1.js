class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let l = 1;
        let r = Math.max(...piles);
        let answer = 0;
        while(l <= r){
            const k = Math.floor((l + r) / 2);
            let hours = 0;
            
            for(let i = 0;i < piles.length;i++){
                hours += Math.ceil(piles[i] / k);
            }
            if(hours > h){
                l = k + 1;
            }
            else if(hours <= h){
                answer = k;
                r = k - 1;
            }
        }
        return answer;
    }
}
