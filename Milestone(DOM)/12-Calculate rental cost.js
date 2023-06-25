// 12) Calculate rental cost

function finalRentalPrice(numDays, carType) {
    let rentalCost = 0;
    switch (carType) {
        case "Economy":
            rentalCost = 4000;
            break;
        case "Midsize":
            rentalCost = 10000;
            break;
        case "Luxury":
            rentalCost = 20000;
            break;
        default:
            console.log("Invalid Car Type");
            break;
    }
    return rentalCost * numDays
}

const numDays = 5;
const carType = "Midsize";

const totalCost = finalRentalPrice(numDays, carType)

console.log(totalCost);



//OR


// const days = 5;

// carType = "Midsize";

// switch (carType) {
//     case "Economy":
//         console.log(4000 * days);
//         break;

//     case "Midsize":
//     console.log(10000 * days);
//         break;

//     case "Luxury":
//     console.log(20000 * days);
//         break;

//     default:
//         console.log("Invalid Car Type");
//         break;
// }


