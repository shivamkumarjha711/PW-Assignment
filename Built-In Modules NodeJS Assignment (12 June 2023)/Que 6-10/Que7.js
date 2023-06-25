const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url == '/') {
        res.statusCode = 200;
        res.setHeader('content-Type', 'text/plain');
        res.write("I Am Happy To Learn Full Stack Web Development From PW Skills!");
    }
    res.end();
})

server.listen(5000, () => {
    console.log(`The HTTP Server is running on port 5000`);
})