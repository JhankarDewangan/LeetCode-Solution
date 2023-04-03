// Companies
// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
// Note:

// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.

const getBox = (row, col) => {
    if (row >= 0 && row <= 2) {
        if (col >= 0 && col <= 2) {
            return 0;
        } else if (col >= 3 && col <= 5) {
            return 1;
        } 
        return 2;
    } else if (row >= 3 && row <= 5) {
        if (col >= 0 && col <= 2) {
            return 3;
        } else if (col >= 3 && col <= 5) {
            return 4;
        } 
        return 5;
    }
    
    if (col >= 0 && col <= 2) {
        return 6;
    } else if (col >= 3 && col <= 5) {
        return 7;
    } 
    return 8;
}

var isValidSudoku = function(board) {
    const rows = [{},{},{},{},{},{},{},{},{}];
    const cols = [{},{},{},{},{},{},{},{},{}];
    const boxes =  [{},{},{},{},{},{},{},{},{}];
    
    for (let r = 0; r <= 8; r ++) {
        for (let c = 0; c <= 8; c ++) {
            let val = board[r][c];
            
            if (val === ".") continue;
			
			let box = getBox(r, c);

			if (rows[r][val] || cols[c][val] || boxes[box][val]) return false;

			rows[r][val] = cols[c][val] = boxes[box][val] = true;
        }
    }
    
    return true;
};