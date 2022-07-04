/**
 * @param {number} n - a positive integer
 * @return {number}
 */
 var hammingWeight = function(n) {
    var n1 = (n >>> 0).toString(2)
    var n2 = n1.replaceAll('0', '');
    return n2.length;
};

console.log(hammingWeight(011001010));