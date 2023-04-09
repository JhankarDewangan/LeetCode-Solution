// Given an m x n matrix mat, return an array of all the elements of the array in a diagonal order.

 

// Example 1:


// Input: mat = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [1,2,4,7,5,3,6,8,9]
// Example 2:

// Input: mat = [[1,2],[3,4]]
// Output: [1,2,3,4]

/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function (mat) {
    const rowLen = mat.length;
    const colLen = mat[0].length;
    const total = rowLen * colLen;
    const result = [];
    let k = 0;
    let row = 0;
    let col = 0;
    let direction = "up";
  
    while (k < total) {
      result.push(mat[row][col]);
  
      if (direction === "up") {
        if (row === 0 && col < colLen - 1) {
          col++;
          direction = "down";
        } else if (col === colLen - 1) {
          row++;
          direction = "down";
        } else {
          row--;
          col++;
        }
      } else {
        if (col === 0 && row < rowLen - 1) {
          row++;
          direction = "up";
        } else if (row === rowLen - 1) {
          col++;
          direction = "up";
        } else {
          row++;
          col--;
        }
      }
      k++;
    }
    return result;
  };
 
