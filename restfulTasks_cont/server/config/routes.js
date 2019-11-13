const mongoose = require('mongoose')
Task = mongoose.model('Task')

const tasks = require('../controller/tasks.js')

module.exports = function (app) {

    app.get('/tasks', tasks.index)
    
    app.get('/:id', tasks.find)

    app.post('/new', tasks.new)

    app.put('/update/:id', tasks.update)

    app.delete('/remove/:id', tasks.remove)

}