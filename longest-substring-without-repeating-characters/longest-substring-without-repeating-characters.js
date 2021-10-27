/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let current = [];
    let longest = 0;

    for (let i = 0; i < s.length; i++) {
        const index = current.indexOf(s[i]);
        if (index !== -1) {
            current.splice(0, index + 1);
        }
        current.push(s[i]);
        longest = Math.max(
            longest,
            current.length
        );
    }
    return longest;
};