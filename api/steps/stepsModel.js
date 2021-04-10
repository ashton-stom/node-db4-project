const db = require('../../data/dbConfig.js')

const getAll = async () => {
    let steps = await db("steps")
    return steps
};

const create = async (step) => {
    return await db("steps").insert(step)
}


module.exports = {
    getAll,
    create,
}