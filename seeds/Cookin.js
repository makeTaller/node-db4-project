
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Cooking').del()
    .then(function () {
      // Inserts seed entries
      return knex('Cooking').insert([
        {id: 1, recipe_id: 1, ingredient_id: 1, step_number: 'step 1',instructions: "Boil pasta"},
        {id: 2, recipe_id: 1, ingredient_id: 2,step_number: 'step 2',instructions: "Brown Meat"},
        {id: 3, recipe_id: 1, ingredient_id: 3, step_number: 'step 3',instructions: "Mix suace and tomato"}
      ]);
    });
};
