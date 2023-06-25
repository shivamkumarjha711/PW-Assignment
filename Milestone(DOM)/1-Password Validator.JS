// 1} Password Validator

const Password = "adbcjhjs785"
const confairmPassword = "adbcjhjs785"

if (Password == "adbcjhjs785" && confairmPassword == "adbcjhggjs785") {
    console.log("Your are successfully login");
} else {
    console.log("Your password is wrong logn Unsuccesfull");
}


// OR

const pass = "adbcjhjs785"
const confPassword = "adbcjhjs785"

switch (pass && confPassword) {
    case "adbcjhjs785" && "adbcjhjs7kj85":
        console.log("Your are successfully login");
        break;

    default:
        console.log("Your password is wrong logn Unsuccesfull");
        break;
}


// OR
// By Prompt
// const password = prompt("Enter your password:");
// const confirmPassword = prompt("Confirm your password:");

// if (password === confirmPassword) {
//   console.log("Password Matched. Password validation Successful.");
// } else {
//   console.log("Password didn't match. Password validation unsuccessful.");
// }