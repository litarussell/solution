/**
 * @param {number} N
 * @param {number} K
 * @param {number} W
 * @return {number}
 */

// 动态规划
// dp[x]为抽到的牌面数为x时获胜的概率(x<=N)
// 当抽到x时, 再抽下一张牌时, 其概率有以下关系:
// dp[x] = (1/w)*dp[x+1] + ... + (1/w)*dp[x+w];
// 这个递推关系, 根据规则在x >= k之后, 如果x>N就算失败, x<=N就算成功
// x最大为k-1+w
var new21Game = function(N, K, W) {
  let dp = new Array(K+W)
  let sum = 0
  for (let i = K; i <= K-1+W; i++) {
    dp[i] = i <= N ? 1 : 0
    sum += dp[i]
  }
  for (let i = K-1; i >= 0; i--) {
    dp[i] = sum / W
    sum = sum - dp[i+W] + dp[i]
  }
  return dp[0]
};
let re = new21Game(21, 17, 10)
console.log(re)