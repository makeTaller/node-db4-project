const express = require("express")

const db = require("./cookbook-helper")

const router = express.Router()

// - `getRecipes()`: should return a list of all recipes in the database.
router.get("/", (req, res) => {
    db.getRecipes()
    .then( (recipe) => {
        res.json(recipe )
    })
    .catch( ( error ) => {
        res.status(500).json({ message: "failed to get db"})
    } )
})

// - `getShoppingList(recipe_id)`: should return a list of all ingredients and quantities for a given recipe
router.get("/list/:id", (req,res) => {
    const { id } = req.params
    db.getShoppingList(id)
        .then( (list) => {
            res.json(list)
        })
        .catch(( error) => {
            res.status(500).json({ message: "Failed to get list" })
        })
})

// - `getInstructions(recipe_id)`: should return a list of step by step instructions for preparing a recipe

router.get("/instructions/:id", (req,res) => {
    const { id } = req.params
    db.getInstructions(id)
        .then( ( instructions ) => {
            res.json( instructions )
        })
        .catch(( error) => {
            res.status(500).json({ message: "Failed to get instructions" })
        })
})

module.exports = router