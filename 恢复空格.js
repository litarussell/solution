function Trie() {
  this.next = new Array(26)
  this.isEnd = false
}

Trie.prototype.insert = function (s) {
  let cur = this
  for (let i = s.length - 1; i >= 0; i--) {
    let c = s[i].charCodeAt() - 97
    if (!cur.next[c]) {
      cur.next[c] = new Trie()
    }
    cur = cur.next[c]
  }
  cur.isEnd = true
}

var respace = function (dictionary, sentence) {
  let n = sentence.length
  let t = new Trie()
  for (let i = 0; i < dictionary.length; i++) {
    t.insert(dictionary[i])
  }
  let dp = new Array(n + 1)
  dp[0] = 0

  for (let i = 1; i <= n; i++) {
    dp[i] = dp[i - 1] + 1
    let cur = t
    for (let j = i; j >= 1; j--) { // 检测是否在词典中
      // j - 1: 第j个字符的索引
      let c = sentence[j - 1].charCodeAt() - 97
      if (!cur.next[c]) break // 该字符不匹配词典
      if (cur.next[c].isEnd) { // 该字符是词典中的一个词的终结符
        dp[i] = Math.min(dp[i], dp[j - 1])
      }
      cur = cur.next[c]
    }
  }
  return dp[n]
};

let d = ["looked","just","like","her","brother"]
let s = "jesslookedjustliketimherbrother"
let re = respace(d, s)

console.log(re)
