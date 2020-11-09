
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('FoodList').del()
    .then(function () {
      // Inserts seed entries
      return knex('FoodList').insert([
	      {id: 1, Recipe_id: 1, ingredient_id: 1, quantity: 3},
        {id: 2, Recipe_id: 1, ingredient_id: 1, quantity: 5},
        {id: 3, Recipe_id: 2, ingredient_id: 2, quantity: 6},
        {id: 4, Recipe_id: 2, ingredient_id: 3, quantity: 3},
        {id: 5, Recipe_id: 3, ingredient_id: 1, quantity: 7},
      ]);
    });
};
