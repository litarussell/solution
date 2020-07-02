// function fastPower(a, b, n) {
//   let re = fastPower(a, b, Math.floor(n / 2));
//   re = (re % b) * (re % b) % b;
//   if((n & 1) == 1) re = re * (a % b) % b;
//   return re;
// }


// n = 0b10111111 = 2^7*1 + 2^6*0 + ... + 2^0*1
// a^n = a^(2^7*1 + ... 2^0*1)
//     = a^(2^7*1) * ... * a^(2^0*1)
//     = a^(2^7) * a^(0*2^6) * ... * a^2 * a^1
// a^n%b = (
//            (a^(2^7) % b)
//              * ... *
//            (a^8 % b) *
//            (a^4 % b) *
//            (a^2 % b) *
//            (a^1 % b)
//         ) % b
function fastPower (a, b, n) {
  if (n == 0) return 1 % b;
  if (n == 1) return a % b;

  let m = a, c = 1;
  while(n != 0){
    // if((n % 2) != 0) c = c * m % b; // 奇数
    if((n & 1) == 1) c = c * m % b; // 奇数 检查当前位数是否为1
    // m = (m % b) * (m % b) % b;
    m = (m * m) % b;
    // n/=2;
    n>>=1;
  }
  return c
}

// let re = fastPower(2, 5, 3)
// console.log(re)

// n = 0b1101
// x ^ n = x ^ (2^3 + 2^2 + 0*2^1 + 2^0)
//       = x^(2^3) * x^(2^2) * x^(2^0)
//       = x^8 * x^4 * x^(0*2) * x^1
function fastPower1 (x, n) {
  let result = 1
  while (n != 0) {
    if (n & 1 == 1) result *= x
    x*=x
    n>>=1
  }
  console.log(result)
}

fastPower1(2, 13)
