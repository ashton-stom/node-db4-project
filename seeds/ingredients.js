
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {recipe_id: 1, ingredient_name: 'pre-made dough', quantity: 1, ingredient_name: 'marinara sauce', quantity: 1, ingredient_name: 'cheese', quantity: 2, ingredient_name: 'pepperoni', quantity: 20,},
        {recipe_id: 2, ingredient_name: 'bread slices', quantity: 2, ingredient_name: 'cheese', quantity: 2},
      ]);
    });
};
