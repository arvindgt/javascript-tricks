/**
 * Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isSubsequence = function(s, t) {
    var isSs = true;
    var searchString = t;
    for(a = 0; a < s.length; a++) {
        var index = searchString.indexOf(s[a]);
        if (index > -1) {
            searchString = searchString.substring(index);
        } else {
            isSs = false;
            break;
        }
    }
    return isSs;
};

console.log(isSubsequence('abc', 'ahbgdc'));
console.log(isSubsequence('axc', 'ahbgdc'));
console.log(isSubsequence('aaaaaa', 'bbaaaa'));