function isSafe(x, y, mat, visited, m, n) {
    return (x >= 0 && x < m && y >= 0 && y < n && mat[x][y] == 1 && !visited[x][y]);
}
// adjacency cels can be accessed by
let dx = [-1, 0, 1, 0];
let dy = [0, 1, 0, -1];

function BFS(mat, src, dest) {

    if (mat[src.x][src.y] !== 1 || mat[dest.x][dest.y] !== 1) {
        return -1;
    }

    let m = mat.length;
    let n = mat[0].length;

    let visited = new Array(m).fill().map(() => new Array(n).fill(false));

    visited[src.x][src.y] = true;

    let q = [{
        x: src.x,
        y: src.y,
        dist: 0
    }];

    while (q.length > 0) {
        let front = q.shift();
        if (front.x == dest.x && front.y == dest.y) {
            return front.dist;
        }
        for (let i = 0; i < 4; i++) {
            let xx = front.x + dx[i];
            let yy = front.y + dy[i];

            if (isSafe(xx, yy, mat, visited, m, n)) {
                visited[xx][yy] = true;
                q.push({
                    x: xx,
                    y: yy,
                    dist: front.dist + 1
                });

            }
        }

    }
    return -1;
}
let mat = [
    [1, 0, 1, 1, 1, 1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1, 1, 1, 0, 1, 1],
    [1, 1, 1, 0, 1, 1, 0, 1, 0, 1],
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
    [1, 1, 1, 0, 1, 1, 1, 0, 1, 0],
    [1, 0, 1, 1, 1, 1, 0, 1, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 1, 0, 1, 1, 1],
    [1, 1, 0, 0, 0, 0, 1, 0, 0, 1]
];
let src = {
    x: 0,
    y: 0
};
let dest = {
    x: 3,
    y: 4
};

let distance = BFS(mat, src, dest);
document.write("Shortest distance is :", distance);