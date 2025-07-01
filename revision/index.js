/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  const map = new Map();
  let current = 0;
  let current1 = 0;
  for (num of nums) {
    current = target - num - current1;
  }
};
threeSumClosest([-1, 2, 1, -4], 1);
