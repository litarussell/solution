function solution_1(nums) {
  let n = 0
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i]
    if ((num & 1) === 0) { // 偶数
      n++
      continue
    }
    if (n > 0) {
      let temp = nums[i]
      let j = i
      for (; j > i - n; j--) {
        nums[j] = nums[j-1]
      }
      nums[j] = temp
    }
  }
}
function solution_2(nums) {
  let p1 = 0
  let p2 = nums.length - 1
  while (p1 < p2) {
    // 奇数
    while (p1 < p2 && (nums[p1] & 1) === 1) p1++
    // 偶数
    while (p1 < p2 && (nums[p2] & 1) === 0) p2--

    if (p1 < p2) {
      let temp = nums[p1]
      nums[p1] = nums[p2]
      nums[p2] = temp
      p1++
      p2--
    }
  }
}

let arr = [3, 2, 1, 4]

solution_2(arr)

console.log(arr)
