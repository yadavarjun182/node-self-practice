const express = require("express")

const studentRouter = express.Router()

studentRouter.get("/get", (req, res) => {
    res.send("students get page")
})
studentRouter.post("/add", (req, res) => {
    res.send("students data add page")
})
studentRouter.delete("/delete", (req, res) => {
    res.send("students data delete page")
})

module.exports = { studentRouter }