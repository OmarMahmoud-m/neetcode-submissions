class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        let combinedArr = [...nums1, ...nums2];
        combinedArr.sort((a,b) => a-b);
        let n = combinedArr.length //3
        let l = 0;
        let r = n - 1;
        let mid = Math.floor((l + r) / 2); //1
        console.log(combinedArr)
        if(n % 2 != 0){
            return combinedArr[mid] 
        }
        else{
            return (combinedArr[mid] + combinedArr[mid + 1]) / 2
        }
    }
}
