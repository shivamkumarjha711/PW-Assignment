const array = [1, 5, 3, 4, 8];

function askValues(arr) {
    const [firstValue, secondValue, , , lastValue] = array

    return [firstValue, secondValue, lastValue]
}


console.log(askValues(array));

