module.exports = {
    index: function (req, res) {
        Task.find()
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },
    find: function (req, res) {
        Task.findOne({ _id: req.params.id })
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },
    new: function (req, res) {
        Task.create(req.body)
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },
    update: function (req, res) {
        Task.findById({ _id: req.params.id })
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
        Task.remove({ _id: req.params.id })
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },
}