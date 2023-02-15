const port = 8572
const express = require("express")
const app = express()
const { userRouter } = require("./routes/user.route")

app.use("/pre", userRouter)

app.use(express.json())

app.get("/pre", (req, res) => {
    res.send("welcome to HomePage")
})

app.listen(port, () => {
    console.log("server running at port", port)
})