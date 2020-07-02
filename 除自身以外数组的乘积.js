/**
 * @param {number[]} nums
 * @return {number[]}
 */

// 左右数组, 分别记录对应数字左、右数的乘积
var productExceptSelf = function(nums) {
  let n = nums.length
  let l = new Array(n), r = new Array(n)
  l[0] = 1
  r[n-1] = 1
  for (let i = 1; i < n; i++) {
    l[i] = l[i-1] * nums[i-1]
  }
  for (let j = n-2; j >= 0; j--) {
    r[j] = r[j+1] * nums[j+1]
  }
  return l.map((v, i) => v * r[i])
};

let re = productExceptSelf([1,2,3,4])
console.log(re)