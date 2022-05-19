// HTTP module
const http = require('http')

// req = incoming request, res = what's being sent back 
const server = http.createServer((req, res) => { 
    if (req.url === '/') {
        res.end('Welcome to our homepage')
    }
    if (req.url === './about') {
        res.end('Here is a short history')
    }
    res.end(`
        <h1>Oops!</h1>
        <p>We can't seem to find the page that you're looking for</p>
        <a href="/">Back home</a>
    `)
})

// server.listen(5000)