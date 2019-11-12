const mongoose = require('mongoose');
task = mongoose.model('Task')
module.exports = {
    index: function (req, res) {
        task.find({})
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },
    find: function (req, res) {
        task.find({ name: req.params.name })
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },
    new: function (req, res) {
        task.create(req.body)
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },
    update: function (req, res) {
        task.findById({ _id: req.params.id })
            .then((task) => {
                const taskData = req.body;
                if (taskData.title) {
                    task.title = taskData.title
                }
                if (taskData.description) {
                    task.description = taskData.description
                }
                if (taskData.completed) {
                    task.completed = taskData.completed
                }
                return task.save(function (err) {
                    if (err) {
                        res.json(err);
                    }
                    else {
                        res.json(task);
                    }
                })
            })
            .catch(err => res.json(err));
    },
    remove: function (req, res) {
        task.remove({ _id: req.params.id })
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },
}