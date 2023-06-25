function greet(name) {
    return new Promise((resolve) => {
        const greeting = `Hello, ${name}`
        resolve(greeting);
    });
};

greet('Shivam').then((message) => console.log(message));  