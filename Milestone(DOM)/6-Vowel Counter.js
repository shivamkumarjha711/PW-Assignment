// 6) Vowel Counter

function vowelCheckCount(userName) {
    const vowels = ["a", "e", "i", "o", "u"];
    let count = 0;
    for (let i = 0; i < userName.length; i++) {
        if (vowels.includes(userName[i].toLowerCase())) {
            count ++
        }
    }
    return count;
}

const userName = "shivanand";
const vowelNumber = vowelCheckCount(userName);
console.log(`vowel count for ${userName} is ${vowelNumber}`);


// OR

