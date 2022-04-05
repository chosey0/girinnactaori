/**
 * @param {number} x
 * @return {boolean}
 */

var isPalindrome = function (x) {
  // * 1트
  // n = x.toString().length - 1;
  // for (i = 0; i < n / 2; i++) {
  //   j = x.toString()[i];
  //   k = x.toString()[n--];
  //   console.log(j, k);
  //   if (j != k) console.log(false);
  //   else if (j == k) console.log(true);
  // }

  // * 통과
  let reverse, notReverse, n, bool;

  notReverse = x.toString().split("");
  reverse = x.toString().split("").reverse();

  if (x < 10) n = notReverse.length;
  // ! else n = notReverse.length;
  // * 배열의 길이는 1부터 시작한다...
  else n = notReverse.length - 1;

  for (i = 0; i < n / 2; i++) {
    if (notReverse[i] != reverse[i]) return false;
    // ! else if (notReverse[i] == reverse[i]) return true;
    // * 처음엔 회문배열 요소가 같으면 true를 리턴하게 했는데 그러면 함수가 끝나버림
    // * 해결 : true값은 변수에 저장하고 다음 인덱스 비교, false값은 회문배열이 아니므로 함수 종료
    else if (notReverse[i] == reverse[i]) bool = true;
  }

  if (bool == true) return true;
};

// ? 제출할 때 주어진 x 값
// isPalindrome(121);
// isPalindrome(0);
// isPalindrome(1000021);
