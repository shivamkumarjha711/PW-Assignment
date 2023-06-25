const fs = require('fs');

fs.unlink('nodejs_architecture.txt', function (err) {
    if (err) {
        console.log("Deletation Unsuccesfull");
    } else {
        console.log("File Deleted SuccessFully");
    }
})