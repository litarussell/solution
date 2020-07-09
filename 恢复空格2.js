// 通过正序解决失败


function Trie() {
  this.next = new Array(26)
  this.len = 0
}

Trie.prototype.insert = function (s) {
  let cur = this
  for (let i = 0; i < s.length; i++) {
    let c = s[i].charCodeAt() - 97
    if (!cur.next[c]) {
      cur.next[c] = new Trie()
    }
    cur = cur.next[c]
  }
  cur.len = s.length
}

var respace = function (dictionary, sentence) {
  let n = sentence.length
  let t = new Trie()
  for (let i = 0; i < dictionary.length; i++) {
    t.insert(dictionary[i])
  }
  let dp = new Array(n + 1)
  dp[0] = 0

  let cur = t
  for (let i = 1; i <= n; i++) {
    dp[i] = dp[i - 1] + 1
    let c = sentence[i - 1].charCodeAt() - 97
    if (!cur.next[c]) {
      if (cur == t) continue
      i--
      cur = t
      continue
    }
    if (cur.next[c].len) {
      dp[i] = Math.min(dp[i], dp[i - cur.next[c].len])
      if (i < n) {
        let c1 = sentence[i].charCodeAt() - 97
        if (!cur.next[c].next[c1]) {
          cur = t
          continue
        }
      }
    }
    cur = cur.next[c]
  }
  return dp[n]
};

let d = [
  "sssjjs","hschjf","hhh","fhjchfcfshhfjhs","sfh","jsf",
  "cjschjfscscscsfjcjfcfcfh","hccccjjfchcffjjshccsjscsc",
  "chcfjcsshjj","jh","h","f","s","jcshs","jfjssjhsscfc"]
let s = "sssjjssfshscfjjshsjjsjchffffs"
let re = respace(d, s)

console.log(re)
// sssjjs 6 s 7 fshscfjjshsjjsjchffffs