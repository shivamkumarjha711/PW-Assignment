function manupulateString(string, callback) {
    const manupulatingString = string.toUpperCase();
    callback(manupulatingString);
}

function callback(manupulatingString) {
    console.log(`The Manupulated string is: ${manupulatingString}`);
}

manupulateString("Hello! world", callback)