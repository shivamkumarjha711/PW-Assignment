// Geting the HTML value
const decrementbtn = document.getElementById("decrementbtn");
const incrementbtn = document.getElementById("incrementbtn");
const resetbtn = document.getElementById("resetbtn");
const displayvalue = document.getElementById("displayvalue");


// fOR DECREMENT button click
// decrementbtn.addEventListener("click", () => {
//     const value = Number(displayvalue.innerText);
//     if (value > 0) {
//         displayvalue.innerText = value - 1
//     } else {
//         alert("Ngative Value not Allowed")
//     }
// })


// // for INCREMENT button click
// incrementbtn.addEventListener("click", () => {
//     const value = Number(displayvalue.innerText);
//     if (value >= 10) {
//         alert("10+ value are not Allowed")
//     } else {
//         displayvalue.innerText = value + 1
//     }
// })


// // for reset button
// resetbtn.addEventListener("click", () => {
//     displayvalue.innerText = 0;
// })




//    Another Method by Me



decrementbtn.addEventListener("click", () => {
    const value = Number(displayvalue.innerText);
    displayvalue.innerText = value - 1
})


incrementbtn.addEventListener("click", () => {
    const value = Number(displayvalue.innerText);
    displayvalue.innerText = value + 1
})


resetbtn.addEventListener("click", () => {
    displayvalue.innerText = 0;
})