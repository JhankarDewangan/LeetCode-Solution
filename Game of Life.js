// According to Wikipedia's article: "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970."

// The board is made up of an m x n grid of cells, where each cell has an initial state: live (represented by a 1) or dead (represented by a 0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):

// Any live cell with fewer than two live neighbors dies as if caused by under-population.
// Any live cell with two or three live neighbors lives on to the next generation.
// Any live cell with more than three live neighbors dies, as if by over-population.
// Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
// The next state is created by applying the above rules simultaneously to every cell in the current state, where births and deaths occur simultaneously. Given the current state of the m x n grid board, return the next state.

 

// Example 1:


// Input: board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]]
// Output: [[0,0,0],[1,0,1],[0,1,1],[0,1,0]]
// Example 2:


// Input: board = [[1,1],[1,0]]
// Output: [[1,1],[1,1]]
 

// Constraints:

// m == board.length
// n == board[i].length
// 1 <= m, n <= 25
// board[i][j] is 0 or 1.
 

// Follow up:

// Could you solve it in-place? Remember that the board needs to be updated simultaneously: You cannot update some cells first and then use their updated values to update other cells.
// In this question, we represent the board using a 2D array. In principle, the board is infinite, which would cause problems when the active area encroaches upon the border of the array (i.e., live cells reach the border). How would you address these problems?

/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const gameOfLife = function (board) {
	
	//iterate through the board from the top left corner
	for (let row = 0; row < board.length; row++) {
		for (let col = 0; col < board[0].length; col++) {
			const liveNeighborCount = liveNeighborCheck(row, col)
			const tile = board[row][col]
			//if the cell is live
			if (tile === 1 || tile === "liveToDead") {
				//if it has less than two or more than 3 live neighbors
				if (liveNeighborCount < 2 || liveNeighborCount > 3) {
					//set the value to an arbitrary value that isn't 0 or 1
					//I chose "liveToDead" since it's easy to remember what to do with it later
					board[row][col] = "liveToDead"
				}
			}
			//else (it's dead), if it has 3 neighbors
			else if (liveNeighborCount === 3)
				//set the value to an arbitrary value that isn't 0, 1, or the last arbitrary value chosen
				//I chose "deadToLive" since it's easy to remember what to do with it later
				board[row][col] = "deadToLive"
		}
	}

	//chenge each cell with "liveToDead" to 0 and any cell with "deadToLive" to 1
	for (let row = 0; row < board.length; row++) {
		for (let col = 0; col < board[0].length; col++) {
			const tile = board[row][col]
			if (tile === "liveToDead") {
				board[row][col] = 0
			}
			else if (tile === "deadToLive") {
				board[row][col] = 1
			}
		}
	}
	function liveNeighborCheck(rowMiddle, colMiddle) {
		let count = 0
		//iterate through a 3x3 square with the center being the row and column passed in
		for (let row = rowMiddle - 1; row <= rowMiddle + 1; row++) {
			for (let col = colMiddle - 1; col <= colMiddle + 1; col++) {
				//if the tile is not the center
				if (!(row === rowMiddle && col === colMiddle)) {
					const tile = board?.[row]?.[col]
					//if the tile is in bounds and live
					if (tile === 1 || tile === "liveToDead") {
						//increment the count
						count++
					}
				}
			}
		}
		//return the count
		return count
	}
}