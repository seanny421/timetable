const router = require('express').Router();
module.exports = router;
let User = require('../models/user.model');


router.route('/').get((req, res) => {
    User.find()
        .then(users=> res.json(users))
        .catch(err => res.status(400).json('Error ', + err));
});


router.route('/add').post((req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    const newUser = new User({username, email, password});

    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error ' + err));
});

//get user by username
router.route('/:username').get((req, res) => {
    User.find({ username: req.params.username })
        .then(user => res.json(user))
        .catch(err => res.status(400).json('Error: ' + err));
}); 

//get user by id
router.route('/:id').get((req, res) =>  {
    User.findById(req.params.id)
        .then(user => res.json(user))
        .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;
