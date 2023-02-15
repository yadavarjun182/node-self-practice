const express = require("express");
var jwt = require('jsonwebtoken');
const { UserModel } = require("../model/user.model");

const userRouter = express.Router()

// userRouter

userRouter.post("/register", async (req, res) => {
    const logindata = req.body;
    const user = new UserModel(logindata)
    await user.save()
    res.send("you are registered successfully")
})

userRouter.post("/login", async (req, res) => {
    const { email, password } = req.body;
    let token = jwt.sign({ naam: 'arjun' }, 'merikey');
    const usersarr = await UserModel.find(email, password)
    if (usersarr.length > 0)
        res.send("logged in successfully",token)
    else
        res.send("wrong credentials")
})

userRouter.get("/data", (req, res) => {
    res.send("here is ur data.........................")
})

module.exports = { userRouter }