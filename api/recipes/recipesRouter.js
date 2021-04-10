const express = require('express')

const recipes = require('./recipeModel.js')

const router = express.Router();

router.get('/:id', (req, res, next) => {
    const {id} = req.params

    recipes.findById(id)
        .then(recipe => {
            res.json(recipe)
        })
        .catch(err => {
            console.log(err)
            res.status(400).json({message: 'Try again later.'})
        })
})

module.exports = router;