/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let I, V, X, L, C, D, M;
  let result = 0;
  const romanNum = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  }
  for(i = 0; i<s.length; i++){
    const excNum = romanNum[s[i]]
    console.log(romanNum[s[i]]);
  }
};
romanToInt("IIV")