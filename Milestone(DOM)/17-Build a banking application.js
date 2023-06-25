// 17) Build a banking application

const customer = {name: "Hero", balance:50000};

function deposite(amount) {
    if (amount <= 0) {
        return "Invalid Amount"
    } 
    customer.balance += amount
    return "DEposite Succesfully"
}


function withdarw(amount) {
    if (amount <= 0) {
        return "Invalid Amount"
    } 
    if (customer.balance < amount) {
        return "Insufficient Balance"
    }
    customer.balance -= amount
    return "withdrawal Successfully"
}

console.log(deposite(500));
console.log(customer.balance);







