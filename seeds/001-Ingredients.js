
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('Ingredients').insert([
        {id: 1, name: 'pasta', quantity:2},
        {id: 2, name: 'Ground beef', quantity: 2},
        {id: 3, name: 'Tomato paste', quantity: 3}
      ]);
    });
};
