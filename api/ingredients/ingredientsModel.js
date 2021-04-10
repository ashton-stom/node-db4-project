const db = require('../../data/dbConfig.js')

const getAll = async () => {
    let ingredients = await db("ingredients")
    return ingredients
};

const create = async (ingredient) => {
    return await db("ingredients").insert(ingredient)
}


module.exports = {
    getAll,
    create,
}