/**
 * @param {string[]} strs
 * @return {string}
 */
// todo 주어지는 배열에 들어있는 문자열들이 공통으로 가지고 있는 연속적인 글자를 반환
// * 일단 주어진 문자들을 쪼개고 어딘가에 저장
// * 첫번째 분할 문자[인덱스] == 두번째 분할 문자[인덱스] 이런식으로 비교 
// * 공통 문자가 있으면 output 변수에 저장하여 이어붙임
// * 공통 문자가 없으면 함수 종료
var longestCommonPrefix = function (strs) {
  console.log(strs[0].split(''));

};
let stringArray = ["flower","flow"]

longestCommonPrefix(stringArray);