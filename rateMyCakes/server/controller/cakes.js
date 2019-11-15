module.exports = {
    index: function (req, res) {
        Cake.find()
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },
    find: function (req, res) {
        Cake.findOne({ _id: req.params.id })
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },
    new: function (req, res) {
        Cake.create(req.body)
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },
    update: function (req, res) {
        console.log("wtf");
        Cake.findById({ _id: req.params.id })
            .then(cake => {
                cake.reviews.push(req.body)
                if (cake.reviews.length > 1) {
                    var total = 0;
                    for (let rate of cake.reviews) {
                        total += rate.rating
                    }
                    cake.ratingTotal = total / cake.reviews.length
                }else{
                    cake.ratingTotal = req.body.rating
                }
                cake.save()
                console.log(req.body)
                console.log(cake.ratingTotal)
                    .then(cake => res.json(cake))
                    .catch(err => res.json(err))
            })
            .catch(err => res.json(err));
    },
    remove: function (req, res) {
        Cake.remove({ _id: req.params.id })
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },
}