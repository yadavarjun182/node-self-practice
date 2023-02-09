const mongoose= require("mongoose")

const connection =mongoose.connect(' mongodb://127.0.0.1:27017/university')

const userSchema= mongoose.Schema({
    name:{type:String,required:true},
    age:{type:Number,required:true},
})

const UserModel=mongoose.UserModel("user")

module.exports={connection}