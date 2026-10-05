class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let isValid = true;
        for(let i = 0;i < 9;i++){
            let rows = new Set();
            for(let j = 0;j < 9;j++){
                if(board[i][j] != "."){
                    if(rows.has(board[i][j])){
                        isValid = false;
                        return isValid;
                    }
                    else{
                        rows.add(board[i][j]);
                    }
                }
            }
        }

        for(let i = 0;i < 9;i++){
            let columns = new Set();
            for(let j = 0;j < 9;j++){
                if(board[j][i] != "."){
                    if(columns.has(board[j][i])){
                        isValid = false;
                        return isValid;
                    }
                    else{
                        columns.add(board[j][i]);
                    }
                }
            }
        }
        
        for(let boxRow = 0;boxRow < 9;boxRow += 3){
            for(let boxCol = 0;boxCol < 9;boxCol += 3){
                let subBoxes = new Set();
                for(let rowElement = 0;rowElement < 3;rowElement++){
                    for(let colElement = 0;colElement < 3;colElement++){
                            let currentRow = boxRow + rowElement;
                            let currentCol = boxCol + colElement;
                            let val = board[currentRow][currentCol];
                            if(val != "."){
                                if(subBoxes.has(val)){
                                    isValid = false;
                                    return isValid;
                                }
                                else{
                                    subBoxes.add(val)
                                }
                            }
                    }
                }
            }
        }
        return isValid;
        
    }
}
