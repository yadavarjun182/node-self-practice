const mongoose = require("mongoose")


const connection = mongoose.connect("mongodb://127.0.0.1:27017/backend")

const movieSchema = mongoose.Schema({
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    releseyear: { type: Number, required: true },
}, { versionKey: false })

const serieSchema = mongoose.Schema({
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    startyear: { type: Number, required: true },
}, { versionKey: false })

const MovieModel = mongoose.model("movie", movieSchema)
const SeriesModel = mongoose.model("serie", serieSchema)


module.exports = { connection, MovieModel, SeriesModel }