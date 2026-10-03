class Solution {
    topKFrequent(nums, k) {
       let freq = {};
       for(let i = 0;i < nums.length;i++){
            freq[nums[i]] = (freq[nums[i]] || 0) + 1;
       }

       let pairs = [];
       let keys = Object.keys(freq);
        for(let i = 0;i < keys.length;i++){
            let num = Number(keys[i])
            let freqq = freq[num];
            pairs.push([freqq, num]);
        }
        pairs.sort((a, b) => b[0] - a[0]);
        let res = []
        for(let i = 0;i < k;i++){
            res.push(pairs[i][1]); 
        }
        return res;
    }
}
