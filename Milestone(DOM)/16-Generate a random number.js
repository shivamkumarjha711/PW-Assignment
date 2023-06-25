// 16) Generate a random number

const randomNumber = (() => {
    return Math.floor(Math.random() * 100) + 1;
})();

console.log(randomNumber);