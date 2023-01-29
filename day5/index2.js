const fs = require("fs")
const cowsay = require("cowsay")
const process = require("process")
let ipinfo = process.argv.slice(2)
let dns = require("dns")
let reqipaddress = dns.lookup(`${ipinfo}`, (err, address, family) => {

    return address


})

console.log(reqipaddress)

const http = require("http")
let arr = ['a', 'b', 'c', 'd']

const server = http.createServer((req, res) => {
    // console.log("req",req)
    if (req.url == "/") {
        // res.start()
        res.writeHead(200, { "Content-Type": "text/html" })
        res.end(`<h1>wel come to stud mangenent sys</h1>`)
    }
    else if (req.url == "/writeinfile") {
        fs.writeFile("./employee.txt", "Employee names are as follows", (err) => {
            if (err) throw err
            else {
                // res.start(``)
                res.writeHead(200, { "Content-Type": "text/html" })
                res.end(`<h1>file written sucesfuly</h1>`)
            }
        })
    }
    else if (req.url == "/enternames") {
        fs.appendFile("./employee.txt", `\n${arr[0]}\n${arr[1]}\n${arr[2]}\n${arr[3]}\n`, (err) => {
            console.log("err", err)
        })
        res.writeHead(200, { "Content-Type": "text/html" })
        res.end(`<h1>file written sucesfuly</h1>`)
    }
    else if (req.url == '/alldetails') {
        fs.readFile('./employee.txt', "utf-8", (err, data) => {
            if (err)
                console.log("err", err)
            res.writeHead(200, { "Content-Type": "text/html" })
            // res.end(cowsay.think(()=>{
            //     data
            // }))
            res.end(cowsay.think({
                text: `${data}`,
                e: "o0",
                T: "U "
            }))
            res.end()
        })
    }


    else if (req.url == "/address") {
        res.writeHead(200, { "Content-Type": "text/html" })
        res.end(`${reqipaddress}`)

    }




    else {

        res.writeHead(404, { "Content-Type": "text/html" })
        res.end(`<h1>not found</h1>`)
    }






}).listen(8000, "localhost")

console.log(server)