const express=require("express")
// importing express with CJS method using require keyword

const app=express()
//this is a middleware we will see these in detail in the upcoming session
app.use(express.json()) //this will parse the data in the req.body and you will be able to get it as well and console.log() it
app.get("/", (req,res)=>{
res.send("Hello")
})

//to post at adddetails
app.post("/adddetails",(req,res)=>{
console.log(req.body)
res.send("data has been accepted")
})
//to send all the details of the students that are added
app.get("/details", (req,res)=>{
res.send("All details so far...")
})



//listening on port 4500
app.listen(4500,()=>{
console.log("running on port 4500")
})