const string = "shivam"    

const arr = string.split("");
const reverseArr = arr.reverse();
const joinstring = reverseArr.join("");

function delaydisplay() {
    console.log(joinstring);
}

setTimeout(delaydisplay, 2000)


// OR

setTimeout(() => {
    console.log(string.split("").reverse().join(""));
}, 3000)


// OR

setTimeout(() => {
    const reversed = string.split("").reverse().join("");
    console.log(reversed);
}, 4000)


// OR

setTimeout(function reverse() {
    const newString = string.split("").reverse().join("")
    console.log(newString);
},2000)


// DONE