const bcrypt = require("bcryptjs")
const express = require("express")
const userModel = require("../users/user-model")

const router = express.Router()

router.post("/register", async (req, res, next) => {
    try {
        const saved = await userModel.add(req.body)

        res.status(201).json(saved)
    } catch(err) {
        next(err)
    }
})

router.post("/login", async (req, res, next) => {
    try {
        const { username, password } = req.body
        const user = await userModel.findBy({ username }).first()
        const valid = await bcrypt.compare(password, user.password)

        if (user && valid) {
            res.status(200).json({
                message: `welcome ${user.username}`
            })
        } else {
            res.status(401).json({
                message: "please dont brute force me"
            })
        }
    } catch(err) {
        next(err)
    }
})

module.exports = router