let array = [1, 5, 8, 90, 54];

function minMaxValue(arr) {
    return {
        max: Math.max(...arr),
        min: Math.min(...arr)
    }
}

console.log(minMaxValue(array));