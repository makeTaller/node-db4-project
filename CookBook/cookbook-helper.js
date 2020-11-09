const Cookbook = require("../kconfig")

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions
} 

// - getRecipes()`: should return a list of all recipes in the database.
function getRecipes() {
    return Cookbook("Recipe")
}    

// - `getShoppingList(recipe_id)`: should return a list of all ingredients and quantities for a given recipe
function getShoppingList(id) {
  // return Cookbook("Recipe as r")
  // return Cookbook("Cooking as c")
  return Cookbook("FoodList as f")
          // .select( "name"," id ")
          // .join("Recipe as r", "c.recipe_id", "r.id" )
          .join( "Ingredient as i", "f.ingredient_id", "i.id" )
          // .join( "FoodList as f", "f.id", "c.ingredient_id")
          // .select( [ "r.name","c.step_number", "i.name", "f.quantity"])
          .where({ recipe_id: id})
          // .orderBy("c.step_number")
}


// - `getInstructions(recipe_id)`: should return a list of step by step instructions for preparing a recipe
function getInstructions(id) {
  // return Cookbook( "Recipe as r" )
     return Cookbook( "Cooking as c")
          .select("r.name", "c.step_number", "c.instructions" )
          .join("Recipe as r", "r.id", "c.recipe_id")
          .where({ recipe_id: id })

}