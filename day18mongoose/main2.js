const mongoose = require("mongoose")

const main = async () => {
    try {
        const connection = await mongoose.connect("mongodb://127.0.0.1:27017/backend")
        console.log("-------------------------------------------connected to db----------------------------------------------------")

        await StudentModel.insertMany([{ name: "a", age: 26, role: "FSWD" }])

        const singledata = new StudentModel({
            name: "b",
            age: 28,
            role: "DGFDs"
        })
        await singledata.save()
    }
    catch (err) {
        console.log(err)
    }


}

main()

const studentSchema = mongoose.Schema({
    name: String, required: true,
    age: Number, required: true,
    role: String, required: true
})

const StudentModel = mongoose.model("std", studentSchema)