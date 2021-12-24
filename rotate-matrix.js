let R = 4,
    C = 4;

function rotatematrix(m, n, mat) {
    let row = 0,
        col = 0,
        prev, cur;

    while (row < m && col < n) {
        if (row + 1 == m || col + 1 == n) {
            break;
        }
        // Select and rotate the first row of a matrix 
        prev = mat[row + 1][col];
        for (let i = col; i < n; i++) {
            cur = mat[row][i];
            mat[row][i] = prev;
            prev = cur;
        }
        row++;

        // Select and rotate the last column of a matrix
        for (let i = row; i < m; i++) {
            cur = mat[i][n - 1];
            mat[i][n - 1] = prev;
            prev = cur;
        }
        n--;

        if (row < m) {
            for (let i = n - 1; i >= col; i--) {
                curr = mat[m - 1][i];
                mat[m - 1][i] = prev;
                prev = curr;
            }
        }
        m--;

        // Move elements of first column
        // from the remaining rows
        if (col < n) {
            for (let i = m - 1; i >= row; i--) {
                curr = mat[i][col];
                mat[i][col] = prev;
                prev = curr;
            }
        }
        col++;

    }
    for (let i = 0; i < R; i++) {
        for (let j = 0; j < C; j++)
            document.write(mat[i][j], " ");
        document.write("<br/>");
    }

}
let a = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
];

rotatematrix(R, C, a);