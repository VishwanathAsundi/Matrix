function getAntiDiagonalMatrix(A) {
    let n = A.length;
    let res = new Array(2 * n - 1).fill().map(() => new Array(n).fill(0));

    let resRow = 0,
        resCol = 0;

    function printDiagonal(row, col) {
        while (row < n && col >= 0) {
            res[resRow][resCol] = A[row][col];
            document.write(A[row][col], ", ");
            row++;
            col--;
            resCol++;
        }
        resRow++;
        resCol = 0;
    }

    for (let i = 0; i < (2 * n - 1); i++) {
        if (i < n) {
            printDiagonal(0, i);
        } else {
            printDiagonal(i - (n - 1), n - 1);
        }
    }
    console.log(res);
}
let mat = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(getAntiDiagonalMatrix(mat));