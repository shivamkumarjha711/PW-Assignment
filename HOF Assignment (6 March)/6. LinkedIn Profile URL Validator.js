const linkedinProfileUrl = (url) => {
    const regex = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/gi;
    return regex.test(url);
}

const inputUrls = [
    'https://www.linkedin.com/in/john-doe',
    'https://www.linkedin.com/in/john.doe',
    'https://www.linkedin.com/in/john_doe_123',
    'https://www.linkedin.com/in/john_doe_123/',
    'https://www.linkedin.com/in/john-doe-1234567890123456',
    'https://www.linkedin.com/in/johndoe',
    'https://www.linkedin.com/in/verylongnameverylongnameverylongnameverylongnameverylongname',
    'http://www.linkedin.com/in/john-doe',
];

inputUrls.forEach((url) => {
    if (linkedinProfileUrl(url)) {
        console.log(`${url} is valid of linkedin`);
    } else {
        console.log(`${url} is not valid`);
    }
})




// OR


// const urlValidator = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/gi;

// const url1 = 'https://www.linkedin.com/in/john-doe'
// const url2 = 'https://www.linkedddin.com/in/main-doe'

// if(urlValidator.test(url1)) {
//     console.log(`${url1} +  "is valid"`);
// } else {
//     console.log(`${url1} +  "is not valid"`);
// }

// const validUrl = url1.match(urlValidator);
// console.log(validUrl);


// DONE
