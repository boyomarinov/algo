/* Given two strings s and t, determine if they are isomorphic.
Two strings s and t are isomorphic if the characters in s can be replaced to get t.
All occurrences of a character must be replaced with another character while preserving the order of characters.
No two characters may map to the same character, but a character may map to itself.

Constraints:

1 <= s.length <= 5 * 104
t.length == s.length
s and t consist of any valid ascii character.
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isIsomorphic = function(s, t) {
    const map_s_t = [];
    const map_t_s = [];

    for (let i = 0; i < s.length; i++) {
        const c1 = s[i];
        const c2 = t[i];
        
        if (!map_s_t[c1] && !map_t_s[c2]) {
            map_s_t[c1] = c2;
            map_t_s[c2] = c1;
        } else if (!(map_s_t[c1] === c2 && map_t_s[c2] === c1)) {
            return false;
        }
    }

    return true;
};

console.log(isIsomorphic('egg', 'add'));
console.log(isIsomorphic('egg', 'ada'));
console.log(isIsomorphic('paper', 'title'));