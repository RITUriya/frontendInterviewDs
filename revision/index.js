/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  nums.sort((a, b) => a - b);
  const majNum = Math.ceil(nums.length / 2);
};
majorityElement([3, 2, 3]);
