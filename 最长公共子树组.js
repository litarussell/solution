/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
// var findLength = function(A, B) {
//   let l1 = A.length, l2 = B.length
//   let dp = new Array(l1+1)
//   for (let i = 0; i <= l1; i++) {
//       dp[i] = new Array(l2+1)
//       dp[i][0] = 0
//   }
//   for (let j = 0; j <= l2; j++) dp[0][j] = 0

//   let re = 0
//   for (let i = 1; i <= l1; i++) {
//       for (let j = 1; j <= l2; j++) {
//           if (A[i-1] == B[j-1]) {
//               dp[i][j] = dp[i-1][j-1] + 1
//               if (dp[i][j] > re) re = dp[i][j]
//               continue
//           }
//           dp[i][j] = 0
//       }
//   }
//   return re
// };
// 利用滑动窗口
var findLength = function(A, B) {
    let l1 = A.length, l2 = B.length
    let re = 0
    for (let i = 0; i < l1; i++) { // 滑动B去匹配A
      let r1 = maxLen(A, B, i, 0, Math.min(l1-i, l2))
      re = Math.max(re, r1)
    }
    for (let j = 0; j < l2; j++) { // 滑动A去匹配B
      let r2 = maxLen(A, B, 0, j, Math.min(l2-j, l1))
      re = Math.max(re, r2)
    }
    return re
};

function maxLen(a, b, i, j, len) {
    let re = 0, k = 0
    for (let p = 0; p < len; p++) {
        if (a[i + p] === b[j + p]) k++
        else k = 0
        re = Math.max(k, re)
    }
    return re
}

let re = findLength([1,2,3,2,1], [3,2,1,4,7])
console.log(re)