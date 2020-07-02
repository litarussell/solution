/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} pre
 * @param {number[]} post
 * @return {TreeNode}
 */

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

// var constructFromPrePost = function(pre, post) {
//   if (pre.length == 0) return null
//   let root = new TreeNode(pre[0])
//   if (pre.length == 1) return root

//   let index = post.indexOf(pre[1]) + 1 // 后序序列中左右子树分界点
//   root.left = constructFromPrePost(pre.slice(1, index+1), post.slice(0, index))
//   root.right = constructFromPrePost(pre.slice(index+1), post.slice(index, -1))
//   return root
// };

var constructFromPrePost = function(pre, post) {
  if (pre.length == 0) return null
  let root = new TreeNode(pre[0])
  if (pre.length == 1) return root

  let index = post.indexOf(pre[1]) + 1

  let pre_left = pre.slice(1, index+1) // 去掉前序序列的第一个节点, 其为根结点
  let post_left = post.slice(0, index)

  let pre_right = pre.slice(index+1)
  let post_right = post.slice(index, -1) // 去掉后序序列的最后一个节点, 其为根结点

  root.left = constructFromPrePost(pre_left, post_left)
  root.right = constructFromPrePost(pre_right, post_right)
  return root
};

let root = constructFromPrePost([1,2,4,5,3,6,7], [4,5,2,6,7,3,1])
