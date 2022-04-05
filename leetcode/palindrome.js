/**
 * @param {number} x
 * @return {boolean}
 */

var isPalindrome = function (x) {
  let n, i, j, k;

  n = x.toString().length - 1;
  for (i = 0; i < n / 2; i++) {
    j = x.toString()[i];
    k = x.toString()[n--];
    console.log(j, k);
    if (j != k) console.log(false);
    else if (j == k) console.log(true);
  }
};

isPalindrome(121);
