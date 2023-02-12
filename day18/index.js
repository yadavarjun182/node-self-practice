const express = require("express")

const app = express()

app.use((req, res, next) => {
    console.log("hello from middleware")
    next()
})

app.get("/", (req, res) => {
    console.log("hello from home route")
    res.send("home page")
})

app.get("/about", (req, res) => {
    console.log("hello from about")
    res.send("about page")
})

app.get("/contacts", (req, res) => {
    console.log("hello from contacts")
    res.send("contacts page")
})

app.listen(8002, () => {
    console.log("server running at port 8002")
})



