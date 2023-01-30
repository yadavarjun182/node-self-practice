const dns = require("dns")
const fs = require("fs")
const cowsay = require("cowsay")

const mywrite = (websitename) => {
    dns.lookup(websitename, (err, address, family) => {
        if (err)
            console.log("err", err)
        else {
            const mydata = `${websitename} | ${address} | IPv${family}\n`
            fs.appendFile("./data.txt", mydata, (err, data) => {
                if (err)
                    console.log("err", err)
                else
                    console.log("file updated successfully")
            })
        }
    })
}


const myread = (filename) => {
    fs.readFile("./data.txt", "utf-8", (err, data) => {
        if (err)
            console.log("err", err)
        else
            console.log(`${data}`)
    })
}


const mycow = (filename) => {
    fs.readFile("./data.txt", "utf-8", (err, data) => {
        if (err)
            console.log("err", err)
        else
            console.log(cowsay.say({
                text: data,
                e: "oO",
                T: "U "
            }))
    })
}

const mydelete = (filename) => {
    fs.unlink("./data.txt", (err, data) => {
        if (err)
            console.log("err", err)
        else
            console.log(`${filename} deleted successfully`)
    })
}


module.exports = { mywrite, myread, mycow, mydelete }

// fs.writeFile("./data.txt","hi this is arjun",(err,data)=>{

// })