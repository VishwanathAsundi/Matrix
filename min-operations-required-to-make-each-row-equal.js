function findMinOpeartion(mat) {
    let m = mat.length;
    let n = mat[0].length;

    // space O(m)
    let rowSum = [];

    // Time O(m*n)
    for (let i = 0; i < m; i++) {
        let sum = 0;
        for (let j = 0; j < n; j++) {
            sum += mat[i][j];
        }
        rowSum.push(sum);
    }
    // Time O(m)
    let max = Math.max(...rowSum);

    let ops = 0;
    for (let i = 0; i < rowSum.length; i++) {
        ops += max - rowSum[i];
    }
    return ops;
}

// let matrix = [
//     [1, 2],
//     [3, 4]
// ];
let matrix = [
    [1, 2, 3],
    [4, 2, 3],
    [3, 2, 1]
]
document.write(findMinOpeartion(matrix) + "<br>");
// printMatrix(matrix);