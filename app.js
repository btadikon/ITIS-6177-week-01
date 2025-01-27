// Import the HTTP module
const http = require('http');

// Create a server
const server = http.createServer((req, res) => {
    res.statusCode = 200; // Set the HTTP status code
    res.setHeader('Content-Type', 'text/plain'); // Set the response type
    res.end('Hello, World!\n'); // Send the response
});

// Define the port and start the server
const port = 3000;
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
