let person = {
    name: "mithun",
    age: 20,
    address: {
        street: "B-16/20 Hello Park",
        city: "Nwe York",
        State: "USA"
    }
}

function askValues(abj) {
    const {name, address: {street}} = person;

    return {name, street}
}

//OR
// function askValues(abj) {
//     return {name: person.name, street: person.address.street};
// }

console.log(askValues(person));