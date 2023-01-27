const fs = require("fs")

fs.writeFile("./myfile.txt", "well this this file i wrote using module fs\n", (err) => {
    if (err) {
        console.log("some mistake error ")
        console.log(err)
    }
    else
        console.log("done")
}
)

fs.readFile("./myfile.txt", "utf-8", (err, success) => {
    if (err)
        console.log(err)
    else
        console.log(success)
}
)

fs.appendFile("./myfile.txt", "some more text added afterwards", (err) => {
    if (err)
        console.log("err occured", err)
    else
        console.log("appended successfully")

})


// fs.unlink("./myfile.txt", (err) => {
//     if (err)
//         console.log("difficulty in deleting")
//     else
//         console.log("deleted successfully")

// })