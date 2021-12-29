var generate = function (n) {
    let res = new Array(n).fill().map(() => new Array());
    for (let i = 0; i < n; i++) {
        for (let j = 0; j <= i; j++) {
            console.log(j);
            if (j == 0 || j == i) {
                res[i].push(1);
            } else {
                res[i].push(res[i - 1][j - 1] + res[i - 1][j]);
            }
        }
    }
    return res;

};
console.log(generate(1));