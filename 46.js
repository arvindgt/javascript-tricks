/**
 * 692. Top K Frequent Words
 */

/**
 * Given an array of strings words and an integer k, return the k most frequent strings.

Return the answer sorted by the frequency from highest to lowest. Sort the words with the same frequency by their lexicographical order.

 

Example 1:

Input: words = ["i","love","leetcode","i","love","coding"], k = 2
Output: ["i","love"]
Explanation: "i" and "love" are the two most frequent words.
Note that "i" comes before "love" due to a lower alphabetical order.
Example 2:

Input: words = ["the","day","is","sunny","the","the","the","sunny","is","is"], k = 4
Output: ["the","is","sunny","day"]
Explanation: "the", "is", "sunny" and "day" are the four most frequent words, with the number of occurrence being 4, 3, 2 and 1 respectively.
 */

/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
 var topKFrequent = function(words, k) {
    const map = {};

    for (let i=0; i < words.length; i++) {
        map[words[i]] = map[words[i]] ? map[words[i]] + 1 : 1;
    }

    const table = Object.entries(map);
    table.sort((a, b) => b[1] - a[1] || (b[0] < a[0] ? 1 : -1));
    return table.slice(0, k).map(([word]) => word);
};

console.log(topKFrequent(["i","love","leetcode","i","love","coding"], 2));
console.log(topKFrequent(["the","day","is","sunny","the","the","the","sunny","is","is"], 4));
