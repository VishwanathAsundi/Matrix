function printMatrix(a, m) {
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < m; j++) {
            document.write(a[i][j], " ");
        }
        document.write("<br/>");
    }
}

function rotateBy90AntiClockWiseWithoutSpace(a, N) {
    for (let x = 0; x < N / 2; x++) {
        for (let y = x; y < N - x - 1; y++) {
            let temp = a[x][y];
            a[x][y] = a[y][N - 1 - x];
            a[y][N - 1 - x] = a[N - 1 - x][N - 1 - y];
            a[N - 1 - x][N - 1 - y] = a[N - 1 - y][x];
            a[N - 1 - y][x] = temp;
        }
    }
    document.write("<br/> Without Using additional space <br/>")
    printMatrix(a, N);
}

// Using M*N additional space
function rotateBy90WithSpace(a, rows) {
    // Space O(m*n) space
    let temp = new Array(rows).fill().map(() => new Array(rows));

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < rows; j++) {
            temp[rows - 1 - j][i] = a[i][j];
        }
    }
    printMatrix(temp, rows);
}
let N = 3;
let a = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
rotateBy90WithSpace(a, N);
rotateBy90AntiClockWiseWithoutSpace(a, N);
// let mat = [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 10, 11, 12],
//     [13, 14, 15, 16]
// ];