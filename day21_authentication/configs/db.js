const mongoose = require("mongoose")

const { connection } = mongoose.connect("mongodb+srv://arjun:arjun@cluster0.3wtn3cm.mongodb.net/nemauthdb?retryWrites=true&w=majority")
module.exports = { connection }