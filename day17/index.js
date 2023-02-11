const express = require("express")
const multer = require("multer")
const app = express()


app.post("/upload", (req, res) => {
    res.send("file uploaded")
})


app.listen(9001,()=>{
console.log("server listening at 9001")
})