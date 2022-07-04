/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    
    salary.sort((a, b) => a - b);
    // console.log(salary);
    const salary1 = salary.slice(1, salary.length - 1);
    // console.log(salary1);
    const sum = salary1.reduce((a, b) => a + b, 0);
    // console.log(sum, salary1.length);
    return sum/salary1.length;
};

console.log(average([25000,48000,57000,86000,33000,10000,42000,3000,54000,29000,79000,40000]))