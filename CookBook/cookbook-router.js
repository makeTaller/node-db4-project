const express = require("express")

const db = require("./cookbook-helper")

const router = express.Router()

router.get("/", (req, res) => {
    db.getRecipes()
    .then( (recipe) => {
        res.json(recipe )
    })
    .catch( ( error ) => {
        res.status(500).json({ message: "failed to get db"})
    } )
})

module.exports = router