/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  nums.sort((a, b) => a - b);
  let count = 1;
  const majel = Math.floor(nums.length / 2);
  if (nums.length == 1) return nums[0];
  else {
    for (i = 0; i < nums.length; i++) {
      if (nums[i] == nums[i + 1]) {
        count++;
        if (count > majel) {
          console.log("in if loop", nums[i]);
          return nums[i];
        }
      } else count = 1;
    }
  }
};
majorityElement([1]);
