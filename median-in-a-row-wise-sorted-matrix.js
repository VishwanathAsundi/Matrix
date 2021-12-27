function binaryMedian(m, r, c) {
    let min = Number.MAX_VALUE;
    let max = Number.MIN_VALUE;

    for (let i = 0; i < r; i++) {
        if (min > m[i][0]) {
            min = m[i][0];
        }
        if (max < m[i][c - 1]) {
            max = m[i][c - 1];
        }
    }

    let desired = parseInt((r * c + 1) / 2);

    while (min < max) {

        mid = min + parseInt((max - min) / 2);

        let place = 0;

        for (let i = 0; i < r; i++) {

            for (let j = 0; j < c; j++) {
                if (m[i][j] <= mid) {
                    place++;
                }
            }
        }
        if (place < desired) {
            min = mid + 1;
        } else {
            max = mid;
        }
    }
    return min;
}
var r = 3,
    c = 3;
var m = [
    [1, 3, 5],
    [2, 6, 9],
    [3, 6, 9]
];
document.write("Median is " +
    binaryMedian(m, r, c));