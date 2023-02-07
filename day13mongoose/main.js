const mongoose = require("mongoose");

const main = async () => {
    const connection = await mongoose.connect("mongodb://127.0.0.1:27017/backend")
    console.log("connected to mongo")
    // await StudentModel.insertMany([{ name: "arjun", age: 26, city: "pune" }])
    // await StudentModel.insertMany([{ name: "arjun", age: 26, city: "pune" },
    // {
    //     name: "bbb", age: 26, city: "pune"
    // },
    // {
    //     name: "ccc", age: 26, city: "pune"
    // },
    // { name: "ddd", age: 26, city: "pune" },
    // { name: "eee", age: 26, city: "pune" },
    // { name: "ffff", age: 26, city: "pune" },
    // { name: "gggg", age: 26, city: "pune" }
    // ])


    // const student = new StudentModel(
    //     {
    //         name: "arnab",
    //         age: 26,
    //         city: "pune"
    //     })
    // await student.save()


   await StudentModel.updateMany({"city":"pune"},{$set:{"city":"bangalore"}})
    const data = await StudentModel.find()


    console.log(data)
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