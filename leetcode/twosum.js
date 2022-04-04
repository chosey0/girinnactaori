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
  let map = {};
  for (i = 0; i < nums.length; i++) {
    minus = target - nums[i];
    for (j = i + 1; j < nums.length; j++) {
      if (minus === nums[j]) return [i, j];
    }
  }
};
// Example
// nums [2, 7, 11, 15]
// target 9
// expected [0,1]

// 이해를 돕기위해 다른 input을 대입해봄
// nums [3, 0, 3]
// target 6
// expected [0,2]
let twoSum3 = function (nums, target) {
  let i, minus, object;
  object = {};
  for (i = 0; i < nums.length; i++) {
    // * minus에 target - 현재 nums 배열의 값을 저장
    // loop 1-1 minus == 7
    // loop 1-2 minus == 2

    // loop 2-1 minus == 3
    // loop 2-2 minus == 6
    // loop 2-3 minus == 3
    minus = target - nums[i];

    // * 만약 object에 minus가 있으면 minus와 같은 값을 가진 key의 index와 현재 루프의 index를 반환
    if (minus in object) {
      // todo [object[minus]의 index, 현재 index] == 둘의 key값을 더하면 target의 값과 같음
      // loop 1-1 [ minus == 7, nums[0] == 2]
      // loop 1-2 [ minus == 2, nums[1] == 7]

      // loop 2-1 [minus == 3, nums[0] == 3]
      // loop 2-2 [minus == 6, nums[0] == 0]
      // loop 2-3 [minus == 3, nums[0] == 3]
      return [object[minus], i];
    }

    // * object에 키 값을 nums[i]으로, index값을 value로 저장
    object[nums[i]] = i;
    // todo object [key:nums[i], value: i]
    // loop 1-1 { key(input 2) : value(index 0)}
    // loop 1-2 {
    //  key(input 2) : value(index 0),
    //  key(input 7) : value(index 1)
    // }
    //
    // loop 2-1 { key(input 3) : value(index 0) }
    // loop 2-2 { key(input 3) : value(index 0)
    //            key(input 0) : value(index 1) }
    // loop 2-3 { key(input 3) : value(index 0)
    //            key(input 0) : value(index 1)
    //            key(input 3) : value(index 2) }
    //
  }
};
// ? 근데 저 위에분 답안하고 내꺼랑 for 중첩 수가 같아서 시간 차이는 비슷함
// ? for 중첩을 하나로 줄이려면 minus 값을 객체에 저장하고 다시 루프를 돌려서 계속 저장?
