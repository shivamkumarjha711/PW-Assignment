const urlsValidator = (url) => {
    const regEx = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gi
    return regEx.test(url);
}

const inputurlss = [
    'https://shivam547.com',
    'https://shivam447.com',
    'https://shivam587.hgh',
    'shivamjha711@gmail',
    'https://shivam5@47.com'
]

inputurlss.map((url) => {
    if (urlsValidator(url)) {
        console.log(`${url} is correct`);
    } else {
        console.log(`${url} is not correct`);
    }
})



// OR



// const validater = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gi

// const URL = 'https://shivam547.com'

// const validateUrl = validater.test(URL)
// console.log(validateUrl);

// const validdation = URL.match(validater)
// console.log(validdation);



// DONE


