let string = "Hello sir this is my destructuring Assignment please exmine my Assignment"

function wordCounter(string) {
    const words = string.split(" ");
    // console.log(words);
    const map = new Map();

    for (let word of words) {
        if (map.has(word)) {
            map.set(word, map.get(word) + 1)
        } else {
            map.set(word, 1);
        }
    }
    return map;
}

console.log(wordCounter(string));
