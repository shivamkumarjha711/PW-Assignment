const express = require('express');

const app = express();

app.get('/random', (req, res) => {
    const randomNumber = Math.floor(Math.random() * 100);

    res.send(JSON.stringify({"Random": randomNumber}))
})

app.listen(3050, () => {
    console.log("Server is listen at 3050");
})