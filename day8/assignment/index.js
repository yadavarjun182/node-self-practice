const fs = require("fs")
const http = require("http")
const path = require("path")
// console.log(path.dirname('G:/nodepractice/node-self-practice/day8/assignment/index.js'))
// console.log(path.extname('index.html'))



const server = http.createServer((req, res) => {
    console.log(req.url)
        res.end("hi")
    
})

server.listen(8000, "localhost", () => {
    console.log("server started listening")
})