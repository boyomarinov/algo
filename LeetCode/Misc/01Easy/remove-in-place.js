/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 var removeElement = function(nums, val) {
    let i = nums.length;
    while (i--) {
        if (nums[i] === val) {
            nums.splice(i, 1);
        }
    }
};

var removeElementTwoPointers = function (nums, val) {
    let i = 0;
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] !== val) {
            nums[i] = nums[j];
            i++;
        }
    }
    return i;
}

console.log(removeElement([0,1,2,2,3,0,4,2], 2));

/*\
Notes:
There are two options here:
- decrement the iterator after the element removal
- loop backwards, so the index does not matter (also arguably faster in some cases in JS)

If we don't use splice to optimize for O(n) we can use two pointers approach
*/