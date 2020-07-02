var isPalindrome = function(s) {
  if (s.length <= 1) return true
  let i = 0, j = s.length - 1
  while(check(s[i]) && i < j) i++
  while(check(s[j]) && i < j) j--
  let c = true
  
  if (Number.isNaN(+s[i]) && Number.isNaN(+s[j])) {
      let c1 = s[i].charCodeAt(), c2 = s[j].charCodeAt()
      c =  c1 == c2 || Math.abs(c1 - c2) == 32
  } else {
      c = s[i] == s[j]
  }
  return c && isPalindrome(s.slice(i+1, j))
};

function check (s) {
let c = s.charCodeAt()
let isS1 = 65 <= c && c <= 90
let isS2 = 97 <= c && c <= 122
let isNum = 48 <= c && c <= 57
return !(isNum || isS1 || isS2)
}

let re = isPalindrome("0P")
