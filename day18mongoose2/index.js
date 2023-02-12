const express = require("express")
const { connection } = require("./db")

app = express()
app.use(express.json())

const { moviesRouter } = require("./routes/movie.routes")
const { seriesRouter } = require("./routes/series.routes")

app.use("/movies", moviesRouter)
app.use("/series", seriesRouter)


app.get("/", (req, res) => {
    res.send("welcome to homepage")
})

app.listen(4500, async () => {
    try {
        await connection
        console.log("------------------------connected successfully---------------")
    } catch (err) {
        console.log("err in connection ")
    }
    console.log("server is running at 4500")
})