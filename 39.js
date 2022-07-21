/**
 * Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.

Note that after backspacing an empty text, the text will continue empty.

 

Example 1:

Input: s = "ab#c", t = "ad#c"
Output: true
Explanation: Both s and t become "ac".
Example 2:

Input: s = "ab##", t = "c#d#"
Output: true
Explanation: Both s and t become "".
Example 3:

Input: s = "a#c", t = "b"
Output: false
Explanation: s becomes "c" while t becomes "b".

 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var backspaceCompare = function(s, t) {
    let result = true;
    const hashIndexInS = s.indexOf("#")
    const newS = s.substring(0, hashIndexInS - 1) + '' + s.substring(hashIndexInS + 1);
    const hashIndexInT = t.indexOf("#")
    const newT = t.substring(0, hashIndexInT - 1) + '' + t.substring(hashIndexInT + 1);
    if (newS.indexOf("#") > -1 || newT.indexOf("#") > -1) {
     result = backspaceCompare(newS, newT);
    } else {
        result = newS === newT;
     }
    return result;
};

console.log(backspaceCompare("ab#c", "ad#c"))
console.log(backspaceCompare("ab##", "c#d#"))
console.log(backspaceCompare("a#c", "b"))
