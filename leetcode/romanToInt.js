/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let I, V, X, L, C, D, M;
  let n;
  let RomanNum = s.split('');
  let Operation = 0;

  for (n = 0; n < RomanNum.length; n++) {
    if (RomanNum[n] == 'I') RomanNum[n] = 1;
    else if (RomanNum[n] == 'V') RomanNum[n] = 5;
    else if (RomanNum[n] == 'X') RomanNum[n] = 10;
    else if (RomanNum[n] == 'L') RomanNum[n] = 50;
    else if (RomanNum[n] == 'C') RomanNum[n] = 100;
    else if (RomanNum[n] == 'D') RomanNum[n] = 500;
    else if (RomanNum[n] == 'M') RomanNum[n] = 1000;
    console.log(RomanNum);
  }

  for (let i = 0; i < RomanNum.length; i++) {
    if (RomanNum[i] >= RomanNum[i + 1]) Operation += RomanNum[i] + RomanNum[i + 1];
    else if (RomanNum[i] <= RomanNum[i + 1]) Operation -= RomanNum[i + 1] - RomanNum[i];
  }
  console.log(Operation)
};
romanToInt("VIII")