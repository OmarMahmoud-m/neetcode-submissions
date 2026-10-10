class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        for(let rowCount = 0;rowCount < matrix.length;rowCount++){
            let l = 0;
            let r = matrix[0].length - 1;

            while (l <= r) {
                const m = l + Math.floor((r - l) / 2);
                if (matrix[rowCount][m] > target) {
                    r = m - 1;
                } else if (matrix[rowCount][m] < target) {
                    l = m + 1;
                } else {
                    return true;
                }
            }
        }
        return false;
        
    }
}
