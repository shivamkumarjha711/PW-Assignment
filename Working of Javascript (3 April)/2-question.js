console.log(multiplyNumbers(5, 5));    // ReferenceError: Cannot access 'multiplyNumbers' before initialization

const multiplyNumbers = (function (a, b) {
    return a * b;
  });