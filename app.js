const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        if (req.method === 'GET') {
            console.log("It's a GET Method");
        }
        res.write("Your on Home Page");
        res.end();
    } else if (req.url === '/another') {
        res.write("Your on Another Page");
        res.end();
    }
})


server.listen(3000, () => {
    console.log('Server started on port 3000...');
})