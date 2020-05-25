function test () {
  
}

// O(m+n)
function app (num1, num2) {
  let m = num1.length
  let n = num2.length
  let mid = (m + n + 1) / 2
  let l = Math.floor(mid)
  let r = Math.ceil(mid)
  let p1 = 0
  let p2 = 0

  while (p1 + p2 < l) {
    if (num1[p1] < num2[p2]) {
      p1++
    } else {
      p2++
    }
  }
}