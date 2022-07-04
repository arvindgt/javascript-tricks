/**
 * 
 * You are given two integers, x and y, which represent your current location on a Cartesian grid: (x, y). You are also given an array points where each points[i] = [ai, bi] represents that a point exists at (ai, bi). A point is valid if it shares the same x-coordinate or the same y-coordinate as your location.
 * Return the index (0-indexed) of the valid point with the smallest Manhattan distance from your current location. If there are multiple, return the valid point with the smallest index. If there are no valid points, return -1.
 * The Manhattan distance between two points (x1, y1) and (x2, y2) is abs(x1 - x2) + abs(y1 - y2).
 */

/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
var nearestValidPoint = function(x, y, points) {
    const newPoints = [];
    const newPointsIndex = [];
    points.forEach((p, index) => {
        if (p[0] === x || p[1] === y) {
            newPoints.push(p);
            newPointsIndex.push(index);
        }
    });
    // console.log(x, ',', y)
    // console.log(newPoints);
    if (!newPoints.length) {
        return -1;
    }
    let shortestManhattanDistance = 0;
    // let ManhattanPoints = [];
    let ManhattanPointsIndex = 0;
    for (let a = 0; a < newPoints.length; a++) {
        const newDistance = Math.abs(newPoints[a][0] - x) + Math.abs(newPoints[a][1] - y);
        if(a === 0 || newDistance < shortestManhattanDistance) {
            shortestManhattanDistance = newDistance;
            // ManhattanPoints = newPoints[a];
            ManhattanPointsIndex = newPointsIndex[a];
        }
    }
    // console.log(ManhattanPoints);
    return ManhattanPointsIndex;
};

console.log(nearestValidPoint(3, 4, [[1,2],[3,1],[2,4],[2,3],[4,4]]));
console.log(nearestValidPoint(3, 4, [[3,4]]));
console.log(nearestValidPoint(3, 4, [[2,3]]));
console.log(nearestValidPoint(1, 1, [[1,2],[3,3],[3,3]]));
console.log(nearestValidPoint(1, 1, [[1,2],[2,1],[1,2],[1,1],[1,1],[1,1],[1,2],[2,1],[2,1],[2,1],[2,1],[2,2],[2,2],[2,1],[2,2],[2,2],[2,1],[2,2],[2,1],[2,1],[1,1],[2,1],[1,2],[1,1],[1,1],[2,2],[2,2],[2,2],[1,1],[2,1],[2,1],[2,1],[2,2],[1,2],[1,2],[1,1],[1,2],[1,2]]));
