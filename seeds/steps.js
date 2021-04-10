
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        { recipe_id: 1, step_number: 1, instructions: 'Place pre-made dough on pizza board.' }, { recipe_id: 1, step_number: 2, instructions: 'spread marinara sauce evenly.' }, { recipe_id: 1, step_number: 3, instructions: 'Place toppings evenly.' }, { recipe_id: 1, step_number: 4, instructions: 'place in oven at 400 degreesfor 25 minutes.' }, { recipe_id: 1, step_number: 5, instructions: 'Remove pizza andd let cool for 10 minutes.' },
        { recipe_id: 2, step_number: 1, instructions: 'Place 2 slices of cheese between bread.' }, { recipe_id: 2, step_number: 2, instructions: 'Add butter to pan set on medium heat.' }, { recipe_id: 2, step_number: 3, instructions: 'Cook sandwich 1 minute per side or until golden brown and cheese is melted.', }
      ]);
    });
};
