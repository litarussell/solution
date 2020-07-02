/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
  if (!root) return ""
  let stack = []
  let re = []
  stack.push(root)
  while (stack.length > 0) {
      let p = stack.shift()
      if(p) {
          re.push(p.val)
          stack.push(p.left)
          stack.push(p.right)
      }
      else re.push("")
  }
  return re.join(',')
};

var deserialize = function(data) {
  if (!data) return null
  let arr = data.split(',')
  let stack = []
  let root = new TreeNode(arr.shift())
  stack.push(root)
  while (stack.length > 0 && arr.length > 0) {
    let r = stack.shift()
    let r1 = arr.shift()
    if (r1) {
      r.left = new TreeNode(r1)
      stack.push(r.left)
    }
    if (arr.length > 0) {
      let r2 = arr.shift()
      if (r2) {
        r.right = new TreeNode(r2)
        stack.push(r.right)
      }
    }
  }
  return root
};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

let root = new TreeNode(1)
root.left = new TreeNode(2)
root.right = new TreeNode(3)
root.right.left = new TreeNode(4)
// root.right.right = new TreeNode(5)
let r = serialize(root)
console.log(r)
let h = deserialize(r)
console.log(h)
