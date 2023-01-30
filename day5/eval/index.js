const fs = require("fs")
const dns = require("dns")
const process = require("process")
let arr = process.argv.slice(2)
console.log(arr)
const user_action = arr[0]
const { mywrite, myread, mycow, mydelete } = require("./main")

if (user_action == "write") {
    const websitename = arr[1]
    mywrite(websitename)
}

if (user_action == "read") {
    const filename = arr[1]
    myread(filename)
}

if (user_action == "cow") {
    const filename = arr[1]
    mycow(filename)
}


if (user_action == "delete") {
    const filename = arr[1]
    mydelete(filename)
}

