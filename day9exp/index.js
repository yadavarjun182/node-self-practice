const fs = require("fs")

const express = require("express")

const app = express()

app.use((req, res, next) => {
    console.log("hi from middleware")
    next()
})

app.get("/", (req, res) => {
    console.log("home page")
    res.send("home page")
})

app.listen(4500, () => {
    console.log("server listening")
})