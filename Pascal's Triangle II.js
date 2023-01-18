// Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

// Input: rowIndex = 3
// Output: [1,3,3,1]

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    var pascal = [];
for (var i = 0; i <= rowIndex; i++) {
pascal[i] = [];
pascal[i][0] = 1;
for (var j = 1; j < i; j++) {
    pascal[i][j] = pascal[i-1][j-1] + pascal[i-1][j]
}
pascal[i][i] = 1;
}
return pascal[rowIndex];
};