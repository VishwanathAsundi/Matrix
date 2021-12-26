// Naive approach is O(m*n)

// Optimal solution with Time O(m*Logn)
// m is number of rows, n is number of cols
function first(a, low, high) {
    if (high >= low) {
        let mid = low + parseInt((high - low) / 2);

        if ((mid == 0 || a[mid - 1] == 0) && a[mid] == 1) {
            return mid;
        }

        if (a[mid] == 0) {
            return first(a, mid + 1, high);
        } else {
            return first(a, low, mid - 1);
        }
    }
    return -1;
}

function rowWithMax1s(mat) {
    let R = mat.length;
    let C = mat[0].length;

    let max = first(mat[0], 0, C - 1);
    let max_row_index = 0;

    for (let i = 1; i < R; i++) {
        if (max != -1 && mat[i][C - max - 1] == 1) {
            let index = first(mat[i], 0, C - max - 1);

            if (index != -1 && C - index > max) {
                max = C - index;
                max_row_index = i;
            }
        } else {
            max = first(mat[i], 0, C - 1);
        }
    }
    return max_row_index;

}
// Every row is sorted in ascending order
let mat = [
    [0, 0, 0, 1],
    [0, 1, 1, 1],
    [1, 1, 1, 1],
    [0, 0, 0, 0]
];

document.write(`Index of row with maximum 1s is ${rowWithMax1s(mat)}`);