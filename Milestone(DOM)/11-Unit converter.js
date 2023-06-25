// 11) Unit converter

const celsiusValue = [50, 45, 38, 65];

function fahrenheitValue(celsiusValue) {
    for (let i = 0; i < celsiusValue.length; i++) {
        celsiusValue[i] *= 9/5;
        celsiusValue[i] += 32;
    }
    return celsiusValue;
}

console.log(fahrenheitValue(celsiusValue));


// OR


