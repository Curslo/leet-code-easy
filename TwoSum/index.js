let nums = [2, 4, 6, 8, 3, 5, 7];
let target = 15;

const twoSum = function (nums, target) {
  let storage = {};
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (complement in storage) {
      return [storage[complement], i];
    }
    storage[(nums[i] = i)];
  }
  return [];
};

twoSum(nums, target)

//brute force methos
const twoSumBruteForce = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        for (let j = i + 1; j < nums.length; j++) {
            if (complement === nums[j]) {
                return [i, j]
            }
        }
    }
    return [];
}
console.log(nums)
twoSumBruteForce(nums, target)