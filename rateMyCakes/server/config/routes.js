const mongoose = require('mongoose')
Cake = mongoose.model('Cake')

const cakes = require('../controller/cakes.js')

module.exports = function (app) {

    app.get('/cakes', cakes.index)
    
    app.get('/:id', cakes.find)

    app.post('/new', cakes.new)

    app.put('/update/:id', cakes.update)

    app.delete('/remove/:id', cakes.remove)

}