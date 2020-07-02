function listNode(v) {
  this.val = v
  this.next = null
}

function reverse (head) {
  let p = head,
      p1 = null
  let h = null
  while (p) {
    p1 = p.next
    p.next = h
    h = p
    p = p1
  }
  return h
}

let p = new listNode(1)
// p.next = new listNode(2)
// p.next.next = new listNode(3)
// p.next.next.next = new listNode(4)

// while (p) {
//   console.log(p.val)
//   p = p.next
// }
// console.log('-----')

let re = reverse(p)

while (re) {
  console.log(re.val)
  re = re.next
}

