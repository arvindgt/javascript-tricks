// Given an integer number n, return the difference between the product of its digits and the sum of its digits.
/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    var ProductResult = 1;
    var SumResult = 0;
    n.toString().split('').forEach(c => {
        ProductResult *= c;
        SumResult += Number(c);
    });
    
    return ProductResult - SumResult;
};

console.log(subtractProductAndSum(234));