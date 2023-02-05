//creating  different responses for different requests
const http = require("http")
const PORT = 8000
const server = http.createServer((req, res) => {
    if (req.url == "/") {
        res.end("Hello Welcome to Homepage")
    }
    else if (req.url == '/reports') {
        res.end("Here are all the reports generated so far")
    }
    else if (req.url == "/data") {
        res.end("all data.......................")
    }
    else {
        res.end("bad request")
    }
})

server.listen(`${PORT}`, () => {
    console.log(`server listening on port ${PORT}`)
})