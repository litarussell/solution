/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let n = strs.length
  if (n == 0) return ""
  else if (n == 1) return strs[0]
  else if (n == 2) {
      let s = ""
      for (let i = 0; i < strs[0].length && i < strs[1].length; i++) {
          if (strs[0][i] == strs[1][i]) s+=strs[0][i]
          else break
      }
      return s
  }
  let mid = Math.floor(n / 2)
  let s1 = longestCommonPrefix(strs.slice(0, mid))
  let s2 = longestCommonPrefix(strs.slice(mid))
  return longestCommonPrefix([s1, s2])
};
let p = ["flower","flow","flight"]
let re = longestCommonPrefix(p)
console.log(re)
