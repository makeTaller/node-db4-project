
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Recipe').del()
    .then(function () {
      // Inserts seed entries
      return knex('Recipe').insert([
        {id: 1, name: 'Lasangna'},
        {id: 2, name: 'Mac and Cheese'},
        {id: 3, name: 'Greens'}
      ]);
    });
};
