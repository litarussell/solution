function F(n) {
  if (n < 0) return 0
  let p = [0,1,5,8,9,10,17,17,20,24,30]
  let m = [0]
  for (let i = 1; i <= n; i++) {
    let tmp = []
    console.log('长度: ', i)
    for (let j = 1; j < p.length; j++) {
      if (i >= j) {
        console.log('-->', j, i - j)
        tmp.push(p[j] + m[i - j])
      }
    }
    console.log('--<', tmp)
    m.push(tmp.sort()[tmp.length - 1])
  }
  return m
}
const coinChange = function (coins, amount) {
  if (amount <= 0) return 0
  let F = [0]
  for (let n = 1; n <= amount; n++) {
      let cache = []
      for (let index = 0; index < coins.length; index++) {
          let i = coins[index]
          if (i > 0 && n >= i && F[n - i] != -1) {
            cache.push(1 + F[n - i])
          }
      }
      if (cache.length) F.push(Math.min.apply({}, cache))
      else F.push(-1)
  }
  return F
}
// F(20)
let re = coinChange([0,1,1,1,8], 9)
re.forEach((item, index) => {
  console.log(`${index}: ${item}`)
})
