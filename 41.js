/**
 * 438. Find All Anagrams in a String
 * Given two strings s and p, return an array of all the start indices of p's anagrams in s. You may return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

*/

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
 var findAnagrams = function(s, p) {
    var right = 0, left = 0;
    var output = [];
    var neededChar = {};
    var needFound = p.length;
    
    for (var each of p) {
        if (each in neededChar) {
            neededChar[each]++;
        } else {
            neededChar[each] = 1;
        }
    }
    while(right < s.length) {
        if (neededChar[s[right]]>0) {
                needFound--;
            }
        neededChar[s[right]]--;
        right++;
        
        if (needFound == 0) {
            output.push(left);
        }
        
        if (right - left == p.length) {
            
            if (neededChar[s[left]] >= 0) needFound++;
            neededChar[s[left]]++;
            left++;
        }
    }
    return output;
};

console.log(findAnagrams("cbaebabacd", "abc"));
console.log(findAnagrams("abab", "ab"));
