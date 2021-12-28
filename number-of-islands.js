function isSafe(a, row, col, visited, rows, cols) {
    return row >= 0 && row < rows && col >= 0 && col < cols && (a[row][col] == 1 && !visited[row][col]);
}

function DFS(a, row, col, rows, cols, visited) {
    // poosible moves from (i,j)
    let rowNumber = [-1, -1, 0, 1, 1, 1, 0, -1];
    let colNumber = [0, 1, 1, 1, 0, -1, -1, -1];

    visited[row][col] = true;

    for (let k = 0; k < 8; k++) {
        if (isSafe(a, row + rowNumber[k], col + colNumber[k], visited, rows, cols)) {
            DFS(a, row + rowNumber[k], col + colNumber[k], rows, cols, visited);
        }
    }
}

function countIslands(a) {
    let rows = a.length;
    let cols = a[0].length;

    let visited = new Array(rows).fill().map(() => new Array(cols).fill(false));

    let islandCount = 0;
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (!visited[i][j] && a[i][j] == 1) {
                DFS(a, i, j, rows, cols, visited);
                islandCount++;
            }
        }
    }
    return islandCount;
}
let M = [
    [1, 1, 0, 0, 0],
    [0, 1, 0, 0, 1],
    [1, 0, 0, 1, 1],
    [0, 0, 0, 0, 0],
    [1, 0, 1, 0, 1]
];
document.write("Number of islands is: " + countIslands(M));