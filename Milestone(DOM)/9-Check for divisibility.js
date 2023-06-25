// 9) Check for divisibility

const num = [15, 2, 45, 3, 9, 17, 18];

for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 == 0) {
        continue;
    } if (num[i] % 3 == 0) {
        console.log(num[i]);
    }
}


// OR


// for (let i = 0; i < num.length; i++) {
//     if (num[i] % 3 ===0 && num[i] % 2 !== 0) {
//         console.log(num[i]);
//     }
// }
