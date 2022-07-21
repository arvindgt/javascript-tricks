/**
 * 709. To Lower Case
 * 
 * Given a string s, return the string after replacing every uppercase letter with the same lowercase letter.
 */

/**
 * @param {string} s
 * @return {string}
 */
 var toLowerCase = function(s) {
    return s.replace(/[A-Z]/g, c => c.toLowerCase());
};

console.log(toLowerCase("Hello"));
