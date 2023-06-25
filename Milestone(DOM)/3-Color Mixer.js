// 3) Color Mixer

const color1 = "red";
const color2 = "blue";

const switchCondition = "blue-red";

switch (switchCondition) {
    case "red-blue":
    case "blue-red":
        console.log("Mixed color is Purple");   
        break;
    case "red-yellow":
    case "yellow-red":
        console.log("Mixed color is orange");   
        break;
    case "yellow-blue":
    case "blue-yellow":
        console.log("Mixed color is green");   
        break;
    default:
        console.log("Invalid Colors");
        break;
}