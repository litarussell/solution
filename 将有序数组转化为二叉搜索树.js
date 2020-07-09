/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
// 中序遍历
var sortedArrayToBST = function(nums) {
  let len = nums.length
  if (len == 0) return null
  else if (len == 1) return new TreeNode(nums[0])
  let mid = (len - 1) >> 1
  let root = new TreeNode(nums[mid])
  root.left = sortedArrayToBST(nums.slice(0, mid))
  root.right = sortedArrayToBST(nums.slice(mid+1))
  return root
};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

let r = sortedArrayToBST([-10,-3,0,5,9])

console.log(r)
