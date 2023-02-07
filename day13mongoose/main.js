const mongoose = require("mongoose");

const main = async () => {
    const connection = await mongoose.connect("mongodb://127.0.0.1:27017/backend")
    console.log("connected to mongo")
    await StudentModel.insertMany([{ name: "arjun", age: 26, city: "pune" }])
    connection.disconnect()
    console.log("disconnected")
}

main()


// creating a schema
const studentschema = mongoose.Schema({
    name: String,
    age: Number,
    city: String
}, {
    versionKey: false
})

//create a model/constructor function
const StudentModel = mongoose.model("student", studentschema)