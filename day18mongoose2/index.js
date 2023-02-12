const express = require("express")
const { connection } = require("./db")

app = express()
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("home page")
})


app.listen(4500, async () => {
    try {
        await connection
        console.log("------------------------connected successfully---------------")
    } catch (err) {
        console.log("err in connection ")
    }
    console.log("server is running")
})