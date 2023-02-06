// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.


// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let cache = {};
let result=[];
for (let num of nums2){
    if (!cache[num])cache[num]=1;
    else cache[num]++;
}
for (let num of nums1){
    if (cache[num]){
        result.push(num);
        cache[num]--;
    }
}

return result ;
};