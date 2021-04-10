
exports.up = function(knex) {
  return knex.schema
    .createTable('recipes', tbl => {
        tbl.increments('recipe_id');
        tbl.text('recipe_name')
            .unique()
            .notNullable();
        tbl.date('created_date');
        tbl.integer('steps');
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('recipes')
};
