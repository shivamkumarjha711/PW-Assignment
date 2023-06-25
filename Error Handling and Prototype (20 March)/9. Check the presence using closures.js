let arr = [1,2,4,2,6,4,7,4,5,6,8,4];

function numberChecker(arr) {
    return function retFunc(x) {
        return arr.includes(x);
    }
}

const checkNum = numberChecker(arr);

console.log(checkNum(1));
console.log(checkNum(0));
