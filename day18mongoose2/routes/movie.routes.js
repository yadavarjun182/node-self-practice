const express = require("express")
const moviesRouter = express.Router()
const { MovieModel } = require("../db")



moviesRouter.get("/get", async (req, res) => {
    let query = req.query
    // console.log(query)
    try {
        const allmovies = await MovieModel.find(query)
        res.send(allmovies)
    } catch (err) {
        res.send({ "msg": "cannot get", "err": err.message })
    }

})

moviesRouter.post("/add", async (req, res) => {
    try {
        const newmovie = new MovieModel(req.body)
        await newmovie.save()
        res.send("your movie is added to database")
    } catch (err) {
        res.send({ "msg": "error while adding", "err": err.message })
    }

})

moviesRouter.patch("/update/:id", async (req, res) => {
    const ID = req.params.id
    const payload = req.body
    try {
        await MovieModel.findByIdAndUpdate({ _id: ID }, payload)
        res.send("data updated successfully")
        // res.send("update movies page")

    } catch (err) {
        console.log(err)
    }
})

moviesRouter.delete("/delete/:id", async (req, res) => {
    const ID = req.params.id
    try {
        await MovieModel.findByIdAndDelete({ _id: ID })
        res.send("data deleted successfully")
        // res.send("update movies page")
    } catch (err) {
        console.log(err)
    }
})

module.exports = { moviesRouter }


