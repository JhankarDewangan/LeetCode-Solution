// Given an m x n matrix, return all elements of the matrix in spiral order.

 

// Example 1:


// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [1,2,3,6,9,8,7,4,5]
// Example 2:


// Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
// Output: [1,2,3,4,8,12,11,10,9,5,6,7]
 

// Constraints:

// m == matrix.length
// n == matrix[i].length
// 1 <= m, n <= 10
// -100 <= matrix[i][j] <= 100

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let n=matrix[0].length
let m=matrix.length
console.log(n,m)
    let top=0
let bottom = m-1
let right=n-1
let left =0
let count=0
let bag=""

while(count<n*m){
    
    for(let i = left ;i<=right;i++){
        bag+=matrix[top][i]+" "
        count++
        // console.log(matrix[top][i])
    }
    top++
    if(count==n*m){}
    for(let i=top;i<=bottom;i++){
        bag+=matrix[i][right]+" "
        //  console.log(matrix[i][right])
        count++
    }
    right--
    
    for(let i=right;i>=left;i--){
        bag+=matrix[bottom][i]+" "
        //  console.log(matrix[bottom][i])
        count++
    }
    bottom--
    
    for(let i=bottom;i>=top;i--){
        bag+=matrix[i][left]+" "
        //  console.log(matrix[i][left])
        count++
    }
    left++
    
}

bag=bag.split(" ")
let ans=[]
for(let i=0;i<n*m;i++){
    // if(bag[i]!=0){
    ans.push(bag[i])

    // }
}
return ans
};