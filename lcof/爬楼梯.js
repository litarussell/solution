// 该问题有动态规划的思想, 要找到爬n步阶梯所用到的所有方法, 可归到一个更小规模的问题;
// 爬到n-1步阶梯, 再向上爬一步就到n, 在这钟情形下, 爬n-1步和爬n步所用的方法是一样的;
// 同理, 爬到n-2之后, 只需爬2步就到n，如果先爬1步到n-1, 那么就和上面那种情况一样了;
// 综上, 爬到n所有的方法 = 爬到n-1所有方法 + 爬到n-2所有方法

/**
 * @param {number} n
 * @return {number}
 */
// var climbStairs = function(n) {
//   if (n <=0) return 0
//   if (n == 1) return 1
//   if (n == 2) return 2
//   let dp = new Array(n+1)
//   dp[0] = 0
//   dp[1] = 1
//   dp[2] = 2
//   for (let i = 3; i <= n; i++) {
//     dp[i] = dp[i-1] + dp[i-2]
//   }
//   return dp[n]
// };
var climbStairs = function(n) {
  if (n <= 1) return n
  let a = 1, b = 1, now = 0
  for (let i = 2; i <= n; i++) {
    now = a + b
    a = b
    b = now
  }
  return now
};