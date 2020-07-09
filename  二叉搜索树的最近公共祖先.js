function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var lowestCommonAncestor = function(root, p, q) {
  let m = find(root, p)
  let n = find(root, q)
  let re = check(m, n)
  let stack = [], i = 1
  let h = null
  stack.push(root)
  while (stack.length > 0 && i <= re) {
    h = stack.shift()
    if (h) {
        stack.push(h.left)
        stack.push(h.right)
    }
    i++
  }
  // console.log(h)
  console.log(i)
  return h
};

function find(h1, p) {
  let i = 1
  while (h1) {
      if (p == h1.val) break
      else if (p < h1.val) {
          i*=2
          h1 = h1.left
      } else {
          i = i * 2 + 1
          h1 = h1.right
      }
  }
  return i
}

function check(m, n) {
  let d = Math.abs(m - n)
  if (d == 0) return m
  if (d == 1) return (m > n ? n : m) >> 1
  if (m > n) return check(m>>1, n)
  else return check(m, n>>1)
}

let root = new TreeNode(2)
root.left = new TreeNode(1)
// root.right = new TreeNode(8)
// root.left.left = new TreeNode(0)
// root.left.right = new TreeNode(4)
// root.right.left = new TreeNode(7)
// root.right.right = new TreeNode(9)

// root.left.right.left = new TreeNode(3)
// root.left.right.right = new TreeNode(5)

let re = lowestCommonAncestor(root, 2, 1)
console.log(re)
