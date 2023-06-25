// 5) Capitalize

const userName = "fdgdsu";

userName[0] !== userName[0].toUpperCase() ? console.log(userName[0].toUpperCase() + userName.slice(1) ) : console.log(userName)



// OR

function captilizeName(name) {
    return name.charAt(0).toLowerCase() !== name.charAt(0) ? name : name.charAt(0).toUpperCase() + name.slice(1);
}

const name = "kartik"

const captilized = captilizeName(name);

console.log(captilized);