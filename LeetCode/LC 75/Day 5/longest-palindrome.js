/* 
Given a string s which consists of lowercase or uppercase letters, return the length of the
longest palindrome that can be built with those letters.
Letters are case sensitive, for example, "Aa" is not considered a palindrome here.
 */
/**
 * @param {string} s
 * @return {number}
 */
const longestPalindrome = function (s) {
    let map = {};
    s.split('').forEach((letter) => {
        if (!map[letter]) {
            map[letter] = 1;
        } else {
            map[letter] = map[letter] + 1;
        }
    });

    let palindromeLength = 0;
    let hasSingleValue = false;
    Object.values(map).forEach((letterCount) => {
        if (letterCount % 2 === 0) {
            palindromeLength += letterCount;
        } else {
            palindromeLength += letterCount - 1;
            hasSingleValue = true;
        }
    });

    return hasSingleValue ? palindromeLength + 1 : palindromeLength;
};

console.log(longestPalindrome('abccccdd'));
console.log(longestPalindrome('a'));
console.log(longestPalindrome('ccc'));