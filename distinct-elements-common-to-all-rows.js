function findAndPrintCommonElements(mat, n) {
    let hm = new Map();

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (!hm.has(mat[i][j])) {
                hm.set(mat[i][j], [i]);
            } else {
                if (!hm.get(mat[i][j]).includes(i)) {
                    let temp = hm.get(mat[i][j]);
                    temp.push(i);
                    hm.set(mat[i][j], temp);
                }
            }
        }
    }
    document.write("Distinct elements across all rows are <br/>");
    for (let [key, value] of hm.entries()) {
        if (value.length == n) {
            document.write(key, " ");
        }
    }
}
let mat = [
    [12, 1, 14, 3, 16],
    [14, 2, 1, 3, 35],
    [14, 1, 14, 3, 11],
    [14, 25, 3, 2, 1],
    [1, 18, 3, 21, 14]
]

let n = 5;
findAndPrintCommonElements(mat, n);