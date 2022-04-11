/**
 * Definition for singly-linked list.
 * todo function ListNode(val, next) {
 * todo     this.val = (val===undefined ? 0 : val) // ? 선형 리스트?
 * todo     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * todo 지문에서부터 연결리스트 쓰라고 말하는중
 * @param {ListNode} l1 
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val); // ? 
    this.next = (next === undefined ? null : next);
  }
  const node = ListNode();
  let template = node;
  let move = 0;
  while (li || l2 || move) {
    template.next = new ListNode();
  }
};
addTwoNumbers([9, 9, 9, 9], [9, 9, 9, 9]);