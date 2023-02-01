const fs = require("fs")

console.log("step 0 before")
fs.readFile("./start.txt", "utf-8", (err, data1) => {
    fs.readFile(`./${data1}.txt`, "utf-8", (err, data2) => {
        console.log("step 1:", data2)
        fs.readFile(`./append.txt`, "utf-8", (err, data3) => {
            console.log("step 1:", data3)
            fs.readFile(`./append2.txt`, "utf-8", (err, data4) => {
                console.log("step 1:", data4)
                fs.readFile(`./append3.txt`, "utf-8", (err, data5) => {
                    console.log("step 1:", data5)
                    fs.writeFile(`./all.txt`, `${data1}\n${data2}\n${data3}\n${data4}\n${data5}`, err => {
                        // console.log(err)
                    })
                })
            })
        })
    })
})
console.log("ste 2 after")