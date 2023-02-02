const express = require("express")
const fs = require("fs")

const app = express()

app.use((req, res, next) => {
    const startTime = new Date().getTime()
    next()
    const endTime = new Date().getTime()
    fs.appendFileSync("./routedetails", `route visited: ${req.url} | method: ${rq.method} | Response time:  ${endTime - startTime}`)
    console.log("middleware")
    next()
    console.log("bye middleware")
})

app.get("/", (req, res) => {
    console.log("home page")
    res.send("home page")
})

app.get("/about", (req, res) => {
    console.log("home page")
    res.send("about page")
})

app.get("/data", (req, res) => {
    fs.readFile("./data.json", "utf-8", (err) => {
        if (err)
            console.log(err)
        else {
            res.end(data)
        }
    })
    console.log("home page")
    res.send("about page")
})