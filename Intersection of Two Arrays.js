// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const output = [];
    const hashmap = new Map();
    
    for (let i = 0; i < nums1.length; i++) {
        hashmap.set(nums1[i], i);
    }
    
    for (let i = 0; i < nums2.length; i++) {
        const num = nums2[i];
        if (hashmap.has(num)) {
            output.push(num);
            hashmap.delete(num);
        }
    }
    
    return output;
};