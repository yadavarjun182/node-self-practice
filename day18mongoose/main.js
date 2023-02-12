const mongoose = require("mongoose")
const main = async () => {
    try {
        const connection = await mongoose.connect("mongodb://127.0.0.1:27017/backend")
        console.log("connected to mongo")
        // await StudentModel.insertMany([{ name: "mornig miracle", genre: "self help", price: 400, author: "arjun" }])
        const newobj = new StudentModel({
            title: "atomic habits",
            genre: "self help",
            price: 800,
            author: "arjun"
        })
        await newobj.save()

        const mydata = await StudentModel.find()
console.log(mydata)
        connection.disconnect()
        console.log("disconnected")
    }
    catch (err) {
        console.log(err)
    }
}
main()
// creating structure of the data that i want 
//to store in db here known as 
// schema
const studentSchema = mongoose.Schema({
    title: String,
    genre: String,
    price: Number,
    author: String
}, {
    versionKey: false
})

const StudentModel = mongoose.model("book", studentSchema)





