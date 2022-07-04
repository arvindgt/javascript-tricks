/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function(low, high) {
    let CountOfOdds = 0;
    for(let a = low; a <= high; a++) {
        if (a < 0) continue;
        if (a%2 === 1) {
            CountOfOdds += 1;
        }
    }
    return CountOfOdds;
};

console.log(countOdds(-3, 8));

