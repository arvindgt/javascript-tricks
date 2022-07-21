/**
 * 1232. Check If It Is a Straight Line
 * 
 * You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate of a point. Check if these points make a straight line in the XY plane.

 
 */

/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function (coordinates) {
    // let isStraight = true;
    // const diff = Math.abs(coordinates[0][0] - coordinates[0][1]);
    // coordinates.forEach(c => {
    //     if (Math.abs(c[0] - c[1]) !== diff) {
    //         isStraight = false;
    //     }
    // });
    // return isStraight;

    const isStraight = (x, y, z) => (y[1] - x[1]) * (z[0] - y[0]) === (y[0] - x[0]) * (z[1] - y[1]);
    
    for (let i = 1, n = coordinates.length - 1; i < n; i++)
        if (!isStraight(coordinates[i - 1], coordinates[i], coordinates[i + 1]))
            return false;
    
    return true;

};

console.log(checkStraightLine([[1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7]]));
console.log(checkStraightLine([[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]));
