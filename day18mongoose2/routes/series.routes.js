const express = require("express")
const seriesRouter = express.Router()
const { SeriesModel } = require("../db")

seriesRouter.get("/get", (req, res) => {
    res.send("series get page")
})

seriesRouter.post("/add", async (req, res) => {
    try {
        console.log(req.body)
        const newseries = new SeriesModel(req.body)
        await newseries.save()
        res.send({ "message": "series data is added to db" })
    } catch (err) {
        console.log(err)
        res.send({ "message": "err occured" })
    }

})

seriesRouter.patch("/update", (req, res) => {
    console.log(req.body)

    res.send("series updated successfully")
})

seriesRouter.delete("/delete", (req, res) => {
    res.send("delete series page")
})

module.exports = { seriesRouter }