/**
 * @param {number} x
 * @return {boolean}
 */
//  var isPalindrome = function(x) {
//     const str = x.toString().split('');
//     const mid = Math.floor(str.length / 2);
//     for (let i = 0; i <= mid; i++) {
//         if (str[i] !== str[str.length - i - 1]) {
//             return false;
//         }        
//     }
//     return true;
// };

// use the number approach for faster calculation lg10n
var isPalindrome = function (x) {
    // negative numbers are not palindrome
    // it's not possible palindrome to end up with 0, as it would have to start with 0
    if (x < 0 || (x % 10 === 0 && x !== 0)) {
        return false;
    }

    let reversedNum = 0;
    while (x > reversedNum) {
        reversedNum = reversedNum * 10 + x % 10;
        x = Math.floor(x / 10);
    }
    
    return x === reversedNum || x === Math.floor(reversedNum / 10);
}

console.log(isPalindrome(11));
console.log(isPalindrome(121));
console.log(isPalindrome(1221));
console.log(isPalindrome(12321));

console.log(isPalindrome(10));
console.log(isPalindrome(1241));
console.log(isPalindrome(13321));
