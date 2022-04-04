/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// * 다음 답안
// * https://velog.io/@jakeseo_me/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EB%A6%BF%EC%BD%94%EB%93%9C-1-Two-sum
var twoSum = function (nums, target) {
  for (var i = 0; i < nums.length; i++) {
    for (var j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return []; // no answer
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// * nums[i]의 바로 뒤 인덱스인 nums[j]와 nums[i]의 합이 target과 같으면 i와 j를 반환
// * 근데 이 방법은 두 인덱스가 연속으로 있고 합이 target과 같을때 까지 탐색하는하는데..
// * nums[i]에서 target을 뺀 값을 다시 루프 돌면서 탐색하는건?
// * minus = nums[i] - target
// * if (minus === nums[j]) return [i,j]

// todo 내 답안
let twoSum2 = function (nums, target) {
  let i, j, minus;
  for (i = 0; i < nums.length; i++) {
    minus = target - nums[i];
    for (j = i + 1; j < nums.length; j++) {
      if (minus === nums[j]) return [i, j];
    }
  }
};
