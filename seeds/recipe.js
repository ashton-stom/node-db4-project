
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {recipe_id: 1, recipe_name: 'pizza', steps: 5, created_date: '2021-03-20'},
        {recipe_id: 2, recipe_name: 'grilled cheese', steps: 3, created_date: '2021-04-09'}
      ]);
    });
};
