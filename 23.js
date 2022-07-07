// A sequence of numbers is called an arithmetic progression if the difference between any two consecutive elements is the same.

// Given an array of numbers arr, return true if the array can be rearranged to form an arithmetic progression. Otherwise, return false.

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function(arr) {
    arr.sort(function(a,b){return a-b});
    var dif = arr[1] - arr[0];
    for(var i=2;i<arr.length;i++){
        if(arr[i]-arr[i-1] !== dif){
            return false;
        }
    }
    return true;
};

console.log(canMakeArithmeticProgression([3,5,1]));
console.log(canMakeArithmeticProgression([1,2,4]));
console.log(canMakeArithmeticProgression([1,100]));
console.log(canMakeArithmeticProgression([13,12,-12,9,9,16,7,-10,-20,0,18,-1,-20,-10,-8,15,15,16,2,15]));
