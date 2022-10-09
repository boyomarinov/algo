/*
Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".
*/

/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    if (strs.length === 1) {
        return strs[0];
    }
    const maxPrefixLen = Math.min(...strs.map(s => s.length));
    for (let i = 0; i < maxPrefixLen; i++) {
        const currentLetter = strs[0][i];
        let nextLetterValid = true;
        for (let j = 1; j < strs.length; j++) {
            nextLetterValid = nextLetterValid && strs[j][i] === currentLetter;
        }
        if (!nextLetterValid) {
            return strs[0].slice(0, i);
        } else if (nextLetterValid && i === maxPrefixLen - 1) {
            return strs[0].slice(0, i + 1);
        }
    }
    return '';
};

// console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["ab", "a"]));

/* Other ideas for solution:
- divide and conquer -> divide the array until you reach pairs and go back finding the longest prefix for each pair
- binary search -> make a binary search for the max string in all words
*/