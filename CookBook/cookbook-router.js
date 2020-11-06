const express = require("express")

const db = require("./cookbook-helper")

const router = express.Router()

router.get("/", (req, res) => {
    db.find()
    .then( (recipe) => {
        res.json("message", recipe )
    }
    )
})

module.exports = router