const express = require("express")
const { connection } = require("./db")

const app = express()

app.get("/users", (req, res) => {
    res.send("all users data will be shared")
})


app.post("/register", async (req, res) => {
    try {
        const user = new UserModel(req.body)
        await user.save()
        res.send({ "msg": "user has been registered" })
    } catch (err) {
        res.send({ "msg": "cannot register" })
    }
})




app.listen(4500, async () => {
    try {
        await connection
    }
    catch {

    }
})


