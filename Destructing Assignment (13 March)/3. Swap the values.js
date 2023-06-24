let x = 5;
let y = 10;

function SwappingValues(a, b) {
    [a, b] = [b, a];

    return [a, b]
}

console.log(SwappingValues(x, y));