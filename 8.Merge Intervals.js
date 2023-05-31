// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

 

// Example 1:

// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
// Example 2:

// Input: intervals = [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    let sorted = intervals.sort((a,b)=>a[0]-b[0])
    let res= [sorted[0]];
    for(let i=1;i<sorted.length;i++){
        let currStart= sorted[i][0]
        let currEnd= sorted[i][1]
        let lastEnd=res[res.length-1][1]
        if(currStart<=lastEnd){
            res[res.length-1][1]=Math.max(lastEnd,currEnd)
        }
        else{
            res.push(sorted[i])
        }
    }
    return res;
};