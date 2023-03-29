// An image is represented by an m x n integer grid image where image[i][j] represents the pixel value of the image.

// You are also given three integers sr, sc, and color. You should perform a flood fill on the image starting from the pixel image[sr][sc].

// To perform a flood fill, consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color), and so on. Replace the color of all of the aforementioned pixels with color.

// Return the modified image after performing the flood fill.

 

// Example 1:


// Input: image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2
// Output: [[2,2,2],[2,2,0],[2,0,1]]
// Explanation: From the center of the image with position (sr, sc) = (1, 1) (i.e., the red pixel), all pixels connected by a path of the same color as the starting pixel (i.e., the blue pixels) are colored with the new color.
// Note the bottom corner is not colored 2, because it is not 4-directionally connected to the starting pixel.
// Example 2:

// Input: image = [[0,0,0],[0,0,0]], sr = 0, sc = 0, color = 0
// Output: [[0,0,0],[0,0,0]]
// Explanation: The starting pixel is already colored 0, so no changes are made to the image.


/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {

    const queue = new Queue()

    queue.enqueue([sr, sc])
    
    const curCol = image[sr][sc]

    const rowList = [1,0,0,-1]
    const colList = [0,1,-1,0]

    const rowLen = image.length
    const colLen = image[0].length;

    image[sr][sc] = color

    if(color === curCol) return image

    while(!queue.isEmpty()){
        const [row, col] = queue.dequeue()

        for(let i=0; i < 4; i++){
            const deltaRow = row + rowList[i]
            const deltaCol = col + colList[i]

            if(deltaRow < 0 || deltaCol < 0 || deltaRow >= rowLen || 
                deltaCol >= colLen ) continue;

            if(deltaRow === row && deltaCol === col) continue;
            if(image[deltaRow][deltaCol] === curCol){
                image[deltaRow][deltaCol] = color
                queue.enqueue([deltaRow, deltaCol])
            }
        }

    }

    return image
};
 