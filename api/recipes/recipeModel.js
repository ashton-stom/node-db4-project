const db = require('../../data/dbConfig.js')

const getAll = async () => {
    let recipes = await db("recipes")
    return recipes
};

const findById = async (id) => {
    let recipe = await db('recipes').where('recipe_id', id).first()
    if (!recipe) {
        return null
    } else {
        let steps = await db('steps').where('recipe_id', id)
        recipe.steps = steps;
        let ingredients = await db('ingredients').where('recipe_id', id)
        recipe.ingredients = ingredients;
        return recipe
    }
}

const create = async (recipe) => {
    return await db("recipes").insert(recipe)
}


module.exports = {
    getAll,
    create,
    findById
}