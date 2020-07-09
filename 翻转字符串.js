var reverseWords = function(s) {
  let index = []
  for (let i = 0; i < s.length; i++) {
      if (s[i] == ' ') index.push(i)
  }
  let i = 0
  let str = ""
  for (let j = 0; j < index.length; j++) {
      str += swap(s.slice(i, index[j]))
      str += ' '
      i = index[j] + 1
  }
  str += swap(s.slice(i))
  return str.slice(0)
};

function swap(str) {
  let i = str.length - 1
  let s = ""
  while(i >= 0) {
      s += str[i--]
  }
  return s
}

let str = "Let's take LeetCode contest"

let re = reverseWords(str)

console.log(re)