/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let result = 0;
  // ? 문자에 따라 해당 값으로 변환할 오브젝트
  const excNum = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  }
  for (i = 0; i < s.length; i++) {

    const value = excNum[s[i]]
    const nextValue = excNum[s[i + 1]]

    // ? 빼기 연산은 현재 인덱스와 다음 인덱스를 사용하기 때문에 반복문 변수 i를 증가시켜줘서 중복계산을 피함
    if (value < nextValue) {
      result += nextValue - value
      i++
    } else result += value
  };
  return result;
};

romanToInt("VII")