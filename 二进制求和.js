var addBinary = function(a, b) {
  let x = parseInt(a, 2), y = parseInt(b, 2)
  while (y) {
    let c = (x & y) << 1
    x = x ^ y
    y = c
  }
  return x.toString(2)
};

let re = addBinary('1010', '1011')
console.log(re)