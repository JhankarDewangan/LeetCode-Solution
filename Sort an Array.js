// Given an array of integers nums, sort the array in ascending order and return it.

// You must solve the problem without using any built-in functions in O(nlog(n)) time complexity and with the smallest space complexity possible.

// Input: nums = [5,2,3,1]
// Output: [1,2,3,5]
// Explanation: After sorting the array, the positions of some numbers are not changed (for example, 2 and 3), while the positions of other numbers are changed (for example, 1 and 5).

/**
 * @param {number[]} nums
 * @return {number[]}
 */
function mergeSortedArray(left,right,arr) {
    let i = 0;
    let j = 0;
    let k = 0;

    while(i<left.length && j<right.length) {
        if(left[i] <= right[j]) {
            arr[k] = left[i];
            i++
        }
        else {
            arr[k] = right[j];
            j++;
        }
        k++;
    }

    while(j < right.length) {
        arr[k] = right[j];
        j++;
        k++
    }

    while(i < left.length) {
        arr[k] = left[i];
        k++;
        i++;
    }

    return arr;
}

var sortArray = function(arr) {
    if(arr.length === 1) {
        return arr
    }
    let mid = Math.round(arr.length/2);
    if(arr.length < 2) {
        return;
    }
    let left = [];
    let right = [];
    for(let i=0;i<mid;i++) {
        left.push(arr[i]);
    }

    for(let j = mid;j<arr.length;j++) {
        right.push(arr[j]);
    }

    sortArray(left);
    sortArray(right);
    mergeSortedArray(left,right,arr);

    return arr;
};