exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Ingredient').del()
    .then(function () {
      // Inserts seed entries
      return knex('Ingredient').insert([
        {id: 1, name: 'pasta', quantity:2},
        {id: 2, name: 'Ground beef', quantity: 2},
        {id: 3, name: 'Tomato paste', quantity: 3},
        {id: 4, name: 'Basil', quantity: 3},
        {id: 5, name: 'Corn', quantity: 3},
      ]);
    });
};
