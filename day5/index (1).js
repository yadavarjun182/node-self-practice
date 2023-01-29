const http = require("http")
const fs = require("fs")



const dataarr = ["uddeshy","navneet","arjun","vivek","tanay"]

const server = http.createServer((req,res)=>{
     if(req.url=="/"){
        res.writeHead(200,{"Content-Type": "text/html"})
        console.log("local")
         res.end(`<h1>WELCOME TO EMPLOYEE MANAGMENT SYSTEM</h1>`)
     }
     else if(req.url==="/writeinfile"){
          fs.appendFile("eployee.txt","Employees names are as follows:",(err)=>{
               if(err){
                throw err
               }
               else{
                res.writeHead(200,{"Content-Type": "text/html"})
                console.log("writeinfile")
                 res.end(`<h1>File Created<h1/>`)
               }
          })
     }
     else if(req.url=="/updatedfile"){
         fs.appendFile("eployee.txt",`\n${dataarr[0]}\n${dataarr[1]}\n${dataarr[2]}\n${dataarr[3]}`,(err)=>{
             if(err) throw err;
             else{
                res.writeHead(200,{"Content-Type": "text/html"})
                res.end(`<h1>data added successfuly</h1>`)
             }
         })
     }
     else if(req.url=="/read"){
         fs.readFile("eployee.txt","utf-8",(err,data)=>{
            if(err) throw err
            else{
                res.writeHead(200)
                
                res.end(data)
            }
         })
     }
     else{
         res.writeHead(404,{"Content-Type": "text/html"})
         console.log(`${data}`)
     }
}).listen(3000,"localhost")