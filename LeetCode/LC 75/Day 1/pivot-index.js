/*
Given an array of integers nums, calculate the pivot index of this array.
The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.
If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.

Return the leftmost pivot index. If no such index exists, return -1.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */

var sum = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

// var pivotIndex = function(nums) {
//     for (let i = 0; i < nums.length; i++) {
//         const leftSum = i === 0 ? 0 : sum(nums.slice(0, i));
//         const rightSum = i === nums.length - 1 ? 0 : sum(nums.slice(i + 1));
//         if (leftSum === rightSum) {
//             return i;
//         }
//     }    
//     return -1;
// };

// better approach calculate the whole sum and use dp
var pivotIndex = function(nums) {
    const wholeSum = sum(nums);
    let currentSum = 0;
    for (let i = 0; i < nums.length; i++) {
        if (currentSum === wholeSum - nums[i] - currentSum) {
            return i;
        }
        currentSum += nums[i];
    }    
    return -1;
};

// console.log(pivotIndex([1,7,3,6,5,6]));
console.log(pivotIndex([-1,-1,0,1,1,0]));