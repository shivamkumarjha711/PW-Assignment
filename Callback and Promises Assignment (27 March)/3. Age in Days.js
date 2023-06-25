const objectInput = {
    firstName: "suresh",
    lastName: "khana",
    age: 69
}

function ageInDays(object, callback) {
    const fullNmae = `${object.firstName} ${object.lastName}`;
    const ageInDays = object.age * 365;
    callback(fullNmae, ageInDays)
}

function logResult(fullNmae, ageInDays) {
    console.log(`The person's full name is ${fullNmae} and their age in days is ${ageInDays}.`);
}

ageInDays(objectInput, logResult)