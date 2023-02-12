const express = require("express")
const app = express()
app.use((req, res, next) => {
    console.log("Hello from Middleware")
    next()
    console.log("Bye from Middleware")
})
app.get("/", (req, res) => {
    console.log("Hello from the base route")
    res.send("Welcome")
})
app.listen(3500, () => {
    console.log("Running on 3500")
})