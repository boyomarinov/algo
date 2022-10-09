/*
Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
Return the running sum of nums.
*

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
    let memoizedPrevSum = 0;
    let runningSumArr = [];
    for (let i = 0; i < nums.length; i++) {
        memoizedPrevSum += nums[i];
        runningSumArr[i] = memoizedPrevSum;
    }
    return runningSumArr;
};

// faster and more space efficient solution
var runningSum = function (nums) {
    if (nums.length > 1) {
        for (let i = 1; i < nums.length; i++) {
            nums[i] = nums[i] + nums[i-1];
        }
    }
    
    return nums;
};

console.log(runningSum([1,1,1,1]));
