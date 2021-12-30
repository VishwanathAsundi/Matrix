function printZigZag(a) {
    let n = arr.length;

    let lower = 0,
        mode = 0,
        it = 0;

    // for n*n matrix there are 2n-1 diagonals

    for (let t = 0; t < (2 * n - 1); t++) {
        let t1 = t;
        if (t1 >= n) {
            t1 = n - 1;
            mode++;
            lower++;
            it--;
        } else {
            lower = 0;
            it++;
        }
        for (let i = t1; i >= lower; i--) {
            if ((t1 + mode) % 2 == 0) {
                document.write(a[i][t1 + lower - i], ", ");
            } else {
                document.write(a[t1 + lower - i][i], ", ");
            }
        }
    }
}
let arr = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
];
printZigZag(arr);