function spiralOrder(a) {
    let m = a.length;
    let n = a.length;

    let row = 0,
        col = 0;

    while (row < m && col < n) {
        if (row + 1 == m || col + 1 == n) {
            break;
        }
        for (let j = col; j < n; j++) {
            document.write(a[row][j], " ");
        }
        row++;
        for (let i = row; i < m; i++) {
            document.write(a[i][n - 1], " ");
        }
        n--;
        for (let j = n - 1; j >= col; j--) {
            document.write(a[m - 1][j], " ");
        }
        m--;
        for (let i = m - 1; i >= row; i--) {
            document.write(a[i][col], " ");
        }
        col++;
    }

}
let a = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
];
document.write(spiralOrder(a));