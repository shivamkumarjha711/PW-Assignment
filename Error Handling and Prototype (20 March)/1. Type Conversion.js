function convertToNumber(str) {
    try {
        if (isNaN(str)) {
            return "Invalid Number"
        }
        return str;

    } catch (error) {
        return error.message
    }
}

console.log(convertToNumber("hfh"));
console.log(convertToNumber(125));



// OR

// function convertToNumber(str) {
//         if (isNaN(str)) {
//             return "Not a Number"
//         }
//         return str;
// }

// console.log(convertToNumber("hfh"));