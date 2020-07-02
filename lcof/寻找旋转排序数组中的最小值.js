function findMin (arr) {
  if (arr.length.length === 0) return 0
  let i = 0
  let j = arr.length - 1
  if (arr[i] < arr[j]) return arr[i]
  let mid
  while (i < j) {
    mid = Math.floor((i + j) / 2)
    // 正常排序是从小到大
    if (arr[mid] > arr[i]) { // 最小值在右部
      i = mid + 1
    } else {
      j = mid
    }
    // if (arr[mid] < arr[j]) { // 最小值在左部
    //   j = mid
    // } else {
    //   i = mid + 1
    // }
  }
  console.log(i, j, mid)
  return [i, j, mid]
}

findMin([4,5,6,7,0,1,2])

