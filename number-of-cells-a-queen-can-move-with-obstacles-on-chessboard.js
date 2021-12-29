function isSafe(x, y, n) {
    return (x > 0 && x <= n && y > 0 && y <= n);
}

function check(n, x, y, xx, yy, map) {
    let move = 0;
    while (isSafe(x, y, n) && !map.has(String(x) + String(y))) {
        move++;
        x += xx;
        y += yy;
    }
    return move;
}

function numberofPositions(n, k, x, y, ox, oy) {
    let map = new Map();

    let i = 0;
    // Space O(k)
    while (i < k) {
        map.set(String(ox[i]) + String(oy[i]), 1);
        i++;
    }
    console.log(map);
    let moves = 0;
    // Time O(8*n)
    moves += check(n, x + 1, y, 1, 0, map);
    moves += check(n, x + 1, y + 1, 1, 1, map);
    moves += check(n, x, y + 1, 0, 1, map);
    moves += check(n, x - 1, y + 1, -1, 1, map);
    moves += check(n, x - 1, y, -1, 0, map);

    moves += check(n, x - 1, y - 1, -1, -1, map);

    moves += check(n, x, y - 1, 0, -1, map);

    moves += check(n, x + 1, y - 1, 1, -1, map);

    return moves;
}

let n = 8; // Chessboard size
let k = 1; // number of obstacles
let Qposx = 4; // Queen x position
let Qposy = 4; // Queen y position
let obstPosx = [3]; // x position of obstacles
let obstPosy = [5]; // y position of obstacles
document.write("Number of possible positions a queen take place is : ")
document.write(numberofPositions(n, k, Qposx, Qposy,
    obstPosx, obstPosy));