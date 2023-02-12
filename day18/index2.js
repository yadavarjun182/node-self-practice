
const express = require("express")
const app = express()
const fs = require("fs")

app.use(express.json())

const addStamp = (req, res, next) => {
    req.body.stamp = "Masai Student"
    next()
}

app.post("/addatamp", addStamp, (req, res) => {
    console.log(req.body.stamp)
    res.send("Got the data")
})

app.listen(3500, () => {
    console.log("Running on 3500")
})