// Given an m x n matrix of distinct numbers, return all lucky numbers in the matrix in any order.

// A lucky number is an element of the matrix such that it is the minimum element in its row and maximum in its column.

 

// Example 1:

// Input: matrix = [[3,7,8],[9,11,13],[15,16,17]]
// Output: [15]
// Explanation: 15 is the only lucky number since it is the minimum in its row and the maximum in its column.
// Example 2:

// Input: matrix = [[1,10,4,2],[9,3,8,7],[15,16,17,12]]
// Output: [12]
// Explanation: 12 is the only lucky number since it is the minimum in its row and the maximum in its column.
// Example 3:

// Input: matrix = [[7,8],[1,2]]
// Output: [7]
// Explanation: 7 is the only lucky number since it is the minimum in its row and the maximum in its column.


/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers  = function(matrix) {
    const hashmap = {};
   const output = [];
   
   for (let i = 0; i < matrix.length; i++) {
       let currentMinRow = Infinity;
       let index;
       for (let j = 0; j < matrix[0].length; j++) {
           if (matrix[i][j] < currentMinRow) {
               index = j;
               currentMinRow = matrix[i][j]
           }
       }
       hashmap[i] = index;
   }

   for (let i = 0; i < matrix[0].length; i++) {
       let currentMaxCol = -Infinity;
       let index;
       for (let j = 0; j < matrix.length; j++) {
           if (matrix[j][i] > currentMaxCol) {
               currentMaxCol = matrix[j][i];
               index = j;
           }
       }

       if (hashmap[index] !== undefined && i === hashmap[index]) output.push(currentMaxCol)
   }
   return output;
};