
const express = require("express")

const teacherRouter = express.Router()

teacherRouter.get("/get", (req, res) => {
    res.send("teachers get page")
})
teacherRouter.post("/add", (req, res) => {
    res.send("teachers data add page")
})
teacherRouter.delete("/delete", (req, res) => {
    res.send("teachers data delete page")
})

module.exports = { teacherRouter }