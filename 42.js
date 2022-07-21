/**
 * 424. Longest Repeating Character Replacement
 * 
 * You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

Return the length of the longest substring containing the same letter you can get after performing the above operations.

 */

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
 var characterReplacement = function(s, k) {
    let left = 0, right = 0, mostFreq = 0, maxLen = 0;
   let freqMap = {};
   
   for(right = 0; right < s.length; right++) {
       freqMap[s[right]] = freqMap[s[right]] + 1 || 1;
       mostFreq = Math.max(freqMap[s[right]], mostFreq);
       
       while(right-left+1 - mostFreq > k) {
           freqMap[s[left]] -= 1;
           left++;
       }
       maxLen = Math.max(right-left+1, maxLen);
   }
   return maxLen;
};

console.log(characterReplacement("ABAB", 2))
console.log(characterReplacement("AABABBA", 1))
