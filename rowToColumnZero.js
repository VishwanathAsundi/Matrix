function rowToColumnZero(A) {
    let m = A.length,
        n = A[0].length;

    function makeEntireRowAndColumnZero(row, col) {
        for (let i = 0; i < m; i++) {
            if (A[i][col] != 0) A[i][col] = Infinity;
        }
        for (let j = 0; j < n; j++) {
            if (A[row][j] != 0) A[row][j] = Infinity;
        }

    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (A[i][j] == 0) makeEntireRowAndColumnZero(i, j);
        }
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (A[i][j] == Infinity) {
                A[i][j] = 0;
            }
        }
    }
    return A;
}
let mat = [
    [51, 21, 90, 38, 57, 12, 11, 1, 68, 60],
    [81, 24, 63, 97, 75, 70, 23, 91, 39, 84],
    [0, 21, 97, 12, 46, 48, 50, 3, 57, 69],
    [44, 8, 42, 34, 99, 0, 98, 10, 53, 67],
    [23, 34, 43, 86, 31, 18, 9, 54, 61, 48],
    [90, 61, 21, 87, 26, 67, 88, 28, 70, 45],
    [98, 14, 5, 92, 1, 4, 44, 99, 67, 98],
    [18, 42, 32, 61, 80, 64, 32, 89, 70, 93],
    [89, 61, 7, 10, 0, 85, 29, 40, 13, 0],
    [85, 63, 66, 43, 56, 67, 99, 0, 67, 66]
];
// let mat = [

//     [98, 14, 5, 92, 1, 4, 44, 99, 67, 98],
//     [18, 42, 32, 61, 80, 64, 32, 89, 70, 93],
//     [89, 61, 7, 10, 0, 85, 29, 40, 13, 0]
// ]

console.log(rowToColumnZero(mat));