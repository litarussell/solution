class Heap {
  constructor() {
    this.heap = []
    this.size = 0
  }
  pop () {
    let re = this.heap[0]
    let tmp = this.heap.pop()
    if (this.size > 1) this.heap[0] = tmp // 将最后一个元素提到堆顶
    this.size--
    let p = 1, s = 2 // p指向堆顶 s指向栈顶元素的左子元素
    while (s <= this.size) {
      // 比较根节点的两个子节点大小, 如果左节点 > 右节点, 则需要与根节点交换的就是右节点
      // 该比较只会在根结点的孩子节点中进行, 如果左元素<右元素, 则需要交换的就是左元素
      // 如果左元素>右元素, 则右元素肯定小于左节点为根的整个子树的所有节点
      if (s < this.size && this.compare(this.heap[s-1], this.heap[s])) {
        s++
      }
      // 如果该节点大于根结点元素, 就不用交换
      if (this.compare(this.heap[s-1], this.heap[p-1])) {
        break
      }
      // 该元素小于根节点, 需交换
      this.swap(s-1, p-1)
      p = s
      s = p << 1 // 将之前的s节点作为根节点p, 现在的s为p的左子元素 s = p / 2 = p << 1 
    }
    return re
  }

  push (p) {
    this.heap.push(p)
    this.size++
    let s = this.size
    while (s > 1) { // s元素的父元素索引为s >> 1 = s / 2
      if (this.compare(this.heap[s-1], this.heap[(s >> 1) - 1])) { // 新加元素 > 父元素
        break
      }
      this.swap(s-1, (s >> 1) - 1)
      s >>= 1
    }
  }

  compare (a, b) {
    return a.val >= b.val
  }

  swap (a, b) {
    let tmp = this.heap[a]
    this.heap[a] = this.heap[b]
    this.heap[b] = tmp
  }
}

let m = [
  [1,  2,  3,  4,  5],
  [6,  7,  8,  9,  10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25]
]
let k = 25

function s1 (m, k) {
  let t = new Heap()
  let len = m.length - 1
  
  for (let i = 0; i < m.length; i++) {
    let o = { val: m[i][0], x: i, y: 0 }
    t.push(o)
  }
  
  for (let i = 0; i < k - 1; i++) {
    let now = t.pop()
    if (now.y != len) {
      let o = { val: m[now.x][now.y + 1], x: now.x, y: now.y + 1 }
      t.push(o)
    }
  }
  
  console.log(t)
}


function check (m, mid, k) {
  let num = 0
  let i = m.length - 1, j = 0
  while (i >= 0 && j < m.length) {
      if (m[i][j] <= mid) {
          num += (i + 1)
          j++
      } else {
          i--
      }
  }
  return num >= k
}
function s2 (matrix, k) {
  let len = matrix.length
  let left = matrix[0][0]
  let right = matrix[len-1][len-1]
  while (left < right) {
      let mid = left + ((right - left) >> 1) // 求中位数的值
      if (check(matrix, mid, k)) {
          right = mid
      } else {
          left = mid + 1
      }
  }
  console.log(left)
  return left
}

s2(m, k)