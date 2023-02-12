const express = require("express")

const app = express()
const { studentRouter } = require("./routes/students.route")
const { teacherRouter } = require("./routes/teachers.route")

app.get("/", (req, res) => {
    res.send("welcome to homepage")
})

app.use("/students", studentRouter)
app.use("/teachers", teacherRouter)


app.listen(3500, () => {
    console.log("server listening")
})