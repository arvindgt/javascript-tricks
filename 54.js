/**
 * 1768. Merge Strings Alternately
 * 
 * You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.
 */

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
 var mergeAlternately = function(word1, word2) {
    let result = ""
    
    let i = 0
    
    while(word1[i] || word2[i]){
        result += word1[i] !== undefined ? word1[i] : ""
        result += word2[i] !== undefined ? word2[i] : ""
        i++
    }
    
    return result;
};

console.log(mergeAlternately('abc', 'pqr'));
console.log(mergeAlternately('ab', 'pqrs'));
