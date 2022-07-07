/**
 * You are given two strings s1 and s2 of equal length. A string swap is an operation where you choose two indices in a string (not necessarily different) and swap the characters at these indices.

Return true if it is possible to make both strings equal by performing at most one string swap on exactly one of the strings. Otherwise, return false.
*/

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function(s1, s2) {
    // return s1 === s2 || s1.split('').sort().join() === s2.split('').sort().join();
    // if (s1 === s2) {
    //     return true;
    // }

    // let firstMisMatch = "";
    // let lastMisMatch = "";
    // let firstSwapIndex;
    // let lastSwapIndex;
    // let tempS1Arr = [];
    // for (let a = 0; a < s1.length; a++) {
    //     let appendString = s1[a];
    //     if (s1[a] !== s2[a] && firstMisMatch === "") {
    //         firstMisMatch = s2[a];
    //         firstSwapIndex = a;
    //     }
        
    //     if (s1[s1.length - 1 - a] !== s2[s1.length - 1 - a] && lastMisMatch === "") {
    //         lastMisMatch = s2[s1.length - 1 - a];
    //         lastSwapIndex = s1.length - 1 - a;
    //     }

    //     tempS1Arr.push(appendString);
    // }
    // if (firstSwapIndex !== lastSwapIndex) {
    //     tempS1Arr[firstSwapIndex] = firstMisMatch;
    //     tempS1Arr[lastSwapIndex] = lastMisMatch;
    // }

    // return tempS1Arr.join("") === s2;
    let list = []
	for(let i=0; i<s1.length; i++){
		if(s1[i] != s2[i])   list.push(i)
		if(list.length > 2) return false
	}
	return list.length == 0 || (list.length == 2 && s1[list[0]] == s2[list[1]] && s2[list[0]] == s1[list[1]])
};

// console.log(areAlmostEqual('bank', 'kanb'));
// console.log(areAlmostEqual('attack', 'defend'));
// console.log(areAlmostEqual('kelb', 'kelb'));
// console.log(areAlmostEqual('siyolsdcjthwsiplccjbuceoxmpjgrauocx', 'siyolsdcjthwsiplccpbuceoxmjjgrauocx'));
console.log(areAlmostEqual('aa', 'ac'));
console.log(areAlmostEqual('abcd', 'dcba'));
console.log(areAlmostEqual('caa', 'aaz'));
