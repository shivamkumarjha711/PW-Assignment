// 4) Highest Marks

const marks = [69, 87, 96, 65, 88];

let heighestMark = marks[0];

for (let i = 0; i < marks.length; i++) {
    heighestMark = marks[i] > heighestMark ? marks[i] : heighestMark
}

console.log("Heighest Score gain by any student is:" + heighestMark);


