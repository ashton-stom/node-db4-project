
exports.up = function(knex) {
    return knex.schema
        .createTable('ingredients', tbl => {
            tbl.increments('id');
            tbl.integer('recipe_id');
            tbl.text('ingredient_name')
                .notNullable();
            tbl.integer('quantity')
                .notNullable();
        })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('ingredients')
};
