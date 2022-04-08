var maxCoins = function (nums) {
    let temp = [...nums];
    let coins = 0;

    while (temp.length > 0) {
        if (temp.length > 2) {
            coins += temp[0] * temp[1] * temp[2];
            temp.splice(1, 1);
        } else if (temp.length == 2) {
            if (temp[0] < temp[1]) {
                coins += 1 * temp[0] * temp[1];
                temp.splice(0, 1);
            } else {
                coins += temp[0] * temp[1] * 1;
                temp.splice(1, 1);
            }
        } else {
            coins += temp[0];
            temp.splice(0, 1);
        }
    }
    return coins;
};
console.log(maxCoins([3, 1, 5, 8]));