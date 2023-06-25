let person1 = {
    name: 'Satyam',
    age: 22
}

let person2 = {
    name: 'Satyam',
}

function getPerson(obj) {
    try {
        const {name, age} = obj
        if (typeof obj !== "object" || obj === null || !('name' in obj) || !('age' in obj)) {
            return 'Invalid parameter type';
        } 
        return `Name: ${name}, Age: ${age}`;
    
    } catch (error) {
        return error.message;
    }
}
  

console.log(getPerson(person1));
console.log(getPerson(person2));