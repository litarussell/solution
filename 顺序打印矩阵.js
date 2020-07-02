/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  let l = 0, r = matrix[0].length - 1
  let t = 0, b = matrix.length - 1
  let re = []
  while (1) {
    for (let j = l; j <= r; j++) {
      re.push(matrix[t][j])
    }
    if (++t > b) break

    for (let i = t; i <= b; i++) {
      re.push(matrix[i][r])
    }
    if (l > --r) break;

    for (let j = r; j >= l; j--) {
      re.push(matrix[b][j])
    }
    if (t > --b) break;

    for (let i = b; i >= t; i--) {
      re.push(matrix[i][l])
    }
    if (++l > r) break;
  }
  return re
};
let m = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
let re = spiralOrder(m)
console.log(re)