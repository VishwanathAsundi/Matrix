const printMatrix = (res, m, n) => {
    for (let i = 0; i < m; i++) {
        document.write("[ ");
        for (let j = 0; j < n; j++) {
            document.write(res[i][j], " ");
        }
        document.write("] ");
        document.write("<br/>");
    }
}
const matrixMul = (a, b) => {
    let m = a.length;
    let n = a[0].length;

    let r = b.length;
    let c = b[0].length;

    let res = new Array(m).fill().map(() => new Array(c));

    if (n != r) {
        document.write("Matrix multiplication is not poosible");
        return;
    }

    // Time O(m*n*c) complexity
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < c; j++) {
            let sum = 0;
            for (let k = 0; k < n; k++) {
                sum += a[i][k] * b[k][j];
            }
            res[i][j] = sum;
        }
    }
    printMatrix(res, m, c);
}

let i = 0,
    j = 0,
    k = 0;

const matrixMulRecUtil = (a, m, n, b, r, c, res) => {
    if (i >= m) return;

    if (j < c) {
        if (k < n) {
            res[i][j] += a[i][k] * b[k][j];
            k++;
            matrixMulRecUtil(a, m, n, b, r, c, res);
        }
        k = 0;
        j++;
        matrixMulRecUtil(a, m, n, b, r, c, res);
    }
    j = 0;
    i++;
    matrixMulRecUtil(a, m, n, b, r, c, res);
}

const matrixMulRec = (a, b) => {
    let m = a.length;
    let n = a[0].length;

    let r = b.length;
    let c = b[0].length;

    if (n != r) {
        document.write("Matrix multiplication is not poosible");
        return;
    }

    let res = new Array(m).fill().map(() => new Array(c).fill(0));

    matrixMulRecUtil(a, m, n, b, r, c, res);

    printMatrix(res, m, c);
}



// let a = [
//     [1, 3]
// ];
// let b = [
//     [5, 5],
//     [5, 1]
// ];

let a = [
    [1, 1, 1, 1],
    [2, 2, 2, 2],
    [3, 3, 3, 3],
    [4, 4, 4, 4]
];

let b = [
    [1, 1, 1, 1],
    [2, 2, 2, 2],
    [3, 3, 3, 3],
    [4, 4, 4, 4]
];

matrixMul(a, b);

matrixMulRec(a, b);