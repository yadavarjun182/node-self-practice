const express=require("express")
const multer = require("multer")
const app = express()

const upload = multer({
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, "uploads")
        },
        filename: (req, file, cb) => {
            cb(null, file.filename + "-" + Date.now() + ".jpg")
        }
    })
}).single("user_file")



app.post("/upload", upload, (req, res) => {
    res.send("file uploaded")
})


app.listen(9001, () => {
    console.log("server listening at 9001")
})