const http = require("http")
const server = http.createServer((req, res) => {
    if (req.url == "/") {
        res.end("Welcome to homepage")
    }


})

server.listen(8081, "localhost", () => {
    console.log("listening to server")
})