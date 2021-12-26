function CheckForEqual(a1, a2) {
    return JSON.stringify(a1) === JSON.stringify(a2);
}

function circularShiftLeftBy1(arr) {
    arr.push(arr.shift());
}

// Time complexity is O(n^2)
function isPermutedMatrix(a, n) {
    let standard = a[0];
    let count = 1;
    console.log(a);
    // time O(n)
    for (let i = 1; i < n; i++) {
        let temp = [...a[i]];
        console.log(temp);
        // O(n)
        while (1) {
            if (CheckForEqual(temp, standard)) {
                count++;
                break;
            }
            circularShiftLeftBy1(temp);
            if (CheckForEqual(temp, a[i])) {
                break;
            }
        }
    }
    if (count == n) {
        return true;
    }
    return false;
}
let n = 4;
let mat = [
    [1, 2, 3, 4],
    [4, 1, 2, 3],
    [3, 4, 1, 2],
    [2, 3, 4, 1]
];



if (isPermutedMatrix(mat, n))
    document.write("Yes")
else
    document.write("No")




// Javascript program to check if all rows of a matrix
// are rotations of each other

// Returns true if all rows of mat[0..n-1][0..n-1]
// are rotations of each other.
function isPermutedMatrix(mat, n) {

    // Creating a string that contains
    // elements of first row.
    let str_cat = "";
    for (let i = 0; i < n; i++) {
        str_cat = str_cat + "-" +
            (mat[0][i]).toString();
    }

    // Concatenating the string with itself
    // so that substring search operations
    // can be performed on this
    str_cat = str_cat + str_cat;

    // Start traversing remaining rows
    for (let i = 1; i < n; i++) {

        // Store the matrix into vector in the form
        // of strings
        let curr_str = "";
        for (let j = 0; j < n; j++) {
            curr_str = curr_str + "-" +
                (mat[i][j]).toString();
        }

        // Check if the current string is present in
        // the concatenated string or not

        if (!str_cat.includes(curr_str)) {
            return false;
        }
    }
    return true;
}

// Drivers code
let n = 4;
let mat = [
    [1, 2, 3, 4],
    [4, 1, 2, 3],
    [3, 4, 1, 2],
    [2, 3, 4, 1]
];

if (isPermutedMatrix(mat, n))
    document.write("Yes")
else
    document.write("No")