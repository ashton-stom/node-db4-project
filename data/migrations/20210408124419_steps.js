
exports.up = function(knex) {
  return knex.schema
    .createTable('steps', tbl => {
        tbl.increments('id');
        tbl.integer('recipe_id')
        tbl.integer('step_number');
        tbl.text('instructions')
            .notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('steps')
};
