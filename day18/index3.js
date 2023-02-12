
const express = require("express")
const app = express()
const fs = require("fs")

app.use((req, res, next) => {
    const startTime = new Date().getTime()
    next()
    const endTime = new Date().getTime()
    const datalog = endTime - startTime
    fs.writeFileSync("./lecture.txt", `${datalog}`)
    const data = fs.readFileSync("./lecture.txt", "utf-8")
    res.send(data)

})

app.get("/", (req, res) => {
    res.send("Welcome")
})

app.get("/contacts", (req, res) => {
    res.send("Contacts")
})

app.get("/about", (req, res) => {
    res.send("About")
})

app.get("/blogs", (req, res) => {


})

app.listen(3500, () => {
    console.log("Running on 3500")
})

