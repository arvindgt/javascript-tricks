/**
 * Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

Letters are case sensitive, for example, "Aa" is not considered a palindrome here.
 */


/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
    const NewCharSet = new Set();
    let pallindromeLength = 0;

    for (const c of s) {
        if (NewCharSet.has(c)) { // if true means c's occurence is 2.
            pallindromeLength += 2; // just increase the pallindromeLength by 2.
            NewCharSet.delete(c); // empty the set
        } else { // if false, means it's the first occurence.
            NewCharSet.add(c);
        }
    }

    return pallindromeLength + (NewCharSet.size > 0 ? 1 : 0);
}

console.log(longestPalindrome("abccccdd"));
