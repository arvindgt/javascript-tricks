/**
 * 
Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isIsomorphic = function(s, t) {
    var mappingObject = {};
    if (s.length !== t.length) {
        return false;
    }
    var isIso = true;
    for (var a = 0; a < s.length; a++) {
        if (s[a] in mappingObject) {
            if (mappingObject[s[a]] !== t[a]) {
                isIso = false;
                break;
            }
        } else if (Object.values(mappingObject).includes(t[a])) {
            isIso = false;
            break;
        } else {
            mappingObject[s[a]] = t[a];
        }
    }
    return isIso;
};


console.log(isIsomorphic('egg', 'add'));
console.log(isIsomorphic('foo', 'bar'));
console.log(isIsomorphic('paper', 'title'));
console.log(isIsomorphic('bacd', 'baba'));
