let array = [1, 2, 3, 7, 1, 2, 5, 1, 5]

function uniqueNumbers(Arr) {
    return new Set(Arr);
}

console.log(uniqueNumbers(array));