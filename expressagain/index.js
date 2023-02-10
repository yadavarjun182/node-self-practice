//  const {port} =require(".env")
require('dotenv').config()
const express = require("express")
const app = express()

app.get("/", (req, res) => {
    res.send("welcome to homepage")
})

app.listen(process.env.port, () => {
    console.log(`server is running at port ${process.env.port}`)
})