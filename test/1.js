function ListNode(val) {
  this.val = val;
  this.next = null;
}
var swapPairs = function(head) {
  if (!head || !head.next) return head;
  let p = head.next
  head.next = swapPairs(p.next)
  p.next = head
  return p
};
let h = new ListNode(1)
h.next = new ListNode(2)
h.next.next = new ListNode(3)
h.next.next.next = new ListNode(4)

let p = swapPairs(h)
while (p) {
  console.log(p.val)
  p = p.next
}
