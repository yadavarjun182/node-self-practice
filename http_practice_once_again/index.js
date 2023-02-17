//creating  different responses for different requests
const http = require("http")
const fs = require("fs")
const PORT = 8000

const server = http.createServer((req, res) => {
    if (req.url == "/") {
        res.setHeader("Content-Type", "text/html") //header to specify the res is in html form
        res.end("Hello Welcome to Homepage ")
    }
    else if (req.url == '/reports') {
        res.end("Here are all the reports generated so far")
    }
    else if (req.url == "/data") {
        fs.readFile("./text.txt", "utf-8", (err, data) => {
            if (err) {
                res.write("err occured and no data present")
                res.end(err)
            } else {
                res.end(data)
            }
        })
    }
    else {
        res.end("bad request")
    }
})
server.listen(`${PORT}`, () => {
    console.log(`server listening on port ${PORT}`)
})