function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var recoverFromPreorder = function(S) {
  if (!S) return null
  let i = 0
  while (S[i] != '-' && i < S.length) i++
  let v = S.slice(0, i)
  let deep = 0
  while (S[i] == '-') { i++; deep++ }
  let j = i
  let n = 0
  for (; j < S.length; j++) {
      if (S[j] == '-') n++
      else {
          if (n == deep) break
          else n = 0
      }
  }
  let root = new TreeNode(+v)
  root.left = recoverFromPreorder(S.slice(i, j))
  root.right = recoverFromPreorder(S.slice(j))
  return root
};

let re = recoverFromPreorder("1-401--349---90--88")

console.log(re)