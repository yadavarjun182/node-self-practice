const http = require("http")
const fs = require("fs")
require("./cart.json")
require("./data.json")
require("./users.json")
const server = http.createServer((req, res) => {
    if (req.url == "/") {
        res.end("welcome to homepage")
    }
    else if (req.url == "/data") {
        fs.readFile("./data.json", (err, data) => {
            if (err) {
                console.log(err)
            }
            else {
                res.end(data)
            }
        })
    }



})

server.listen(8080, "localhost", () => {
    console.log("server started listening succussfully ")
})