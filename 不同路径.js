var uniquePathsWithObstacles = function(obstacleGrid) {
  if (obstacleGrid.length == 0) return 0
  if (obstacleGrid[0].length == 0) return 0
  let m = obstacleGrid.length, n = obstacleGrid[0].length
  let dp = new Array(m)
  for (let i = 0; i < m; i++) {
      dp[i] = new Array(n)
  }
  dp[0][0] = 1
  for (let i = 1; i < m; i++) dp[i][0] = +(!obstacleGrid[i][0] && dp[i-1][0])
  for (let j = 1; j < n; j++) dp[0][j] = +(!obstacleGrid[0][j] && dp[0][j-1])

  let x =1, y = 1
  while (x < m && y < n) {
      let i = x, j = y
      // 行遍历
      while (i < m) {
          dp[i][j] = +(!obstacleGrid[i][j] && (dp[i-1][j] + dp[i][j-1]))
          i++
      }
      i = x, j = y + 1
      // 列遍历
      while (j < n) {
          dp[i][j] = +(!obstacleGrid[i][j] && (dp[i-1][j] + dp[i][j-1]))
          j++
      }
      x++
      y++
  }
};

let input = [
  [0,1],
  [0,0]
]

uniquePathsWithObstacles(input)