const Cookbook = require("../kconfig")

module.exports = {
  getRecipes 
} 

function getRecipes() {
    return Cookbook("Recipe")
}    


// - getRecipes()`: should return a list of all recipes in the database.
// - `getShoppingList(recipe_id)`: should return a list of all ingredients and quantities for a given recipe
// - `getInstructions(recipe_id)`: should return a list of step by step instructions for preparing a recipe
