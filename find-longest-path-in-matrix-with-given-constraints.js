// Using Dynaminc programming (dp)
// Time complexity is O(n*n)

function findLongestPathFromACell(i, j, mat, n, dp) {
    if (i < 0 || i >= n || j < 0 || j >= n) {
        return 0;
    }

    // If already computed, return pre comupted values
    if (dp[i][j] != -1) return dp[i][j];

    let x = -1,
        y = -1,
        z = -1,
        w = -1;

    if (j < n - 1 && ((mat[i][j] + 1) == mat[i][j + 1])) {
        x = 1 + findLongestPathFromACell(i, j + 1, mat, n, dp);
    }

    if (j > 0 && ((mat[i][j] + 1) == (mat[i][j - 1]))) {
        y = 1 + findLongestPathFromACell(i, j - 1, mat, n, dp);
    }
    if (i > 0 && (mat[i - 1][j] == (mat[i][j] + 1))) {
        w = 1 + findLongestPathFromACell(i - 1, j, mat, n, dp);
    }
    if (i < n - 1 && (mat[i][j] + 1 == mat[i + 1][j])) {
        z = 1 + findLongestPathFromACell(i + 1, j, mat, n, dp);
    }

    dp[i][j] = Math.max(x, Math.max(y, Math.max(z, Math.max(w, 1))));
    return dp[i][j];
}

function finLongestOverAll(mat) {
    let n = mat.length;

    // create a lookup table of size n*n and fill -1
    let dp = new Array(n).fill().map(() => new Array(n).fill(-1));

    console.log(dp);

    let result = 0;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (dp[i][j] == -1) {
                findLongestPathFromACell(i, j, mat, n, dp);
            }
            result = Math.max(result, dp[i][j]);
        }
    }
    return result;

}
let mat = [
    [1, 2, 9],
    [5, 3, 8],
    [4, 6, 7]
];

document.write("Length of the longest path is ");
document.write(finLongestOverAll(mat));