function printSpiral(n) {
    let temp = new Array(n).fill().map(() => new Array(n).fill(0));

    let count = n * n;

    let row = 0,
        col = 0;
    let totalRows = n;
    let m = n;
    while (row < m && col < n) {

        for (let i = col; i < n; i++)
            temp[row][i] = count--;

        row++;

        for (let i = row; i < m; i++)
            temp[i][n - 1] = count--;

        n--;

        for (let i = n - 1; i >= col; i--)
            temp[m - 1][i] = count--;

        m--;

        for (let i = m - 1; i >= row; i--)
            temp[i][col] = count--;

        col++;

    }

    for (let i = 0; i < totalRows; i++) {
        for (let j = 0; j < totalRows; j++)
            document.write(temp[i][j], " ");
        document.write("<br/>");
    }

}
let n = 5;
printSpiral(n);