function findMaxPathSum(a) {

    let m = a.length;
    let n = a[0].length;

    let max = Number.MIN_VALUE;
    let path = new Array(m);
    for (let j = 0; j < n; j++) {
        if (max < a[0][j]) {
            max = a[0][j];
            path[0] = a[0][j];
        }
    }

    let pathSum = 0;

    // Time O(m*n)
    for (let i = 1; i < m; i++) {
        pathSum += path[i - 1];
        for (let j = 0; j < n; j++) {
            if (j > 0 && j < n - 1) {
                a[i][j] += Math.max(a[i - 1][j - 1], Math.max(a[i - 1][j], a[i - 1][j + 1]));
            } else if (j > 0) {
                a[i][j] += Math.max(a[i - 1][j - 1], a[i - 1][j]);
            } else {
                a[i][j] += Math.max(a[i - 1][j], a[i - 1][j + 1]);
            }
            if (a[i][j] > max) {
                path[i] = a[i][j] - pathSum;
                max = a[i][j];
            }
        }
    }

    document.write("Path to construct maximu sum is : ");
    for (let i = 0; i < path.length; i++) {
        document.write(i != 0 ? " -> " : '', path[i]);
    }
    return max;
}
// let mat = [
//     [10, 10, 2, 0, 20, 4],
//     [1, 0, 0, 30, 2, 5],
//     [0, 10, 4, 0, 2, 0],
//     [1, 0, 2, 20, 0, 4]
// ];
let mat = [
    [1, 2, 3],
    [9, 8, 7],
    [4, 5, 6],
];


document.write("<br/> Sum : ", findMaxPathSum(mat));