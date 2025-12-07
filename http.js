let http = require('http');
 
let server = http.createServer((req, res)=>{
    res.write(`<h1>Hello World</h1>`);
    res.end();
})

server.listen(7600)
// ! we created a simple HTTP server that listens on port 7600 and responds with "Hello World" in an h1 tag.
//! To test it, open a web browser and navigate to http://localhost:7600.
//! You should see "Hello World" displayed on the page.
//! You can stop the server by pressing Ctrl + C in the terminal where the server is running.

