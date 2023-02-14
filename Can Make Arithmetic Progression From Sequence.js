// A sequence of numbers is called an arithmetic progression if the difference between any two consecutive elements is the same.

// Given an array of numbers arr, return true if the array can be rearranged to form an arithmetic progression. Otherwise, return false.

// Input: arr = [3,5,1]
// Output: true
// Explanation: We can reorder the elements as [1,3,5] or [5,3,1] with differences 2 and -2 respectively, between each consecutive elements.

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function(arr) {
    let sum=[...arr].sort((a,b)=>a-b);
    let sum2=sum[1]-sum[0];
    let count=0;
    for(let i=1;i<sum.length-1;i++){

        if(sum[i+1]-sum[i]==sum2){
         count++
        }
        else{
            return false;
        }
    }
    return true;
};

 

