const router = require('express').Router();
module.exports = router;
let Todo = require('../models/todo.model');


router.route('/').get((req, res) => {
    Todo.find()
        .then(todos=> res.json(todos))
        .catch(err => res.status(400).json('Error ', + err));
});


router.route('/add').post((req, res) => {
    const userID = req.body.userID;
    const todoText = req.body.todoText;
    const todoCompleted = req.body.todoCompleted;
    const dayDue = req.body.dayDue;

    const newTodo = new Todo({userID, todoText, todoCompleted, dayDue});

    newTodo.save()
        .then(() => res.json('Todo Added!'))
        .catch(err => res.status(400).json('Error ' + err));
});

router.route('/delete/:id').delete((req, res) => {
    Todo.findByIdAndDelete(req.params.id)
        .then(() => res.json('Todo Deleted'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/complete/:id').post(function(req, res) {
   console.log(req.params.todoCompleted);
    Todo.findByIdAndUpdate(req.params.id, {todoCompleted: true})
        .then(() => res.json('Todo Updated'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/incomplete/:id').post(function(req, res) {
   console.log(req.params.todoCompleted);
    Todo.findByIdAndUpdate(req.params.id, {todoCompleted: false})
        .then(() => res.json('Todo Updated'));
});

//get all todos, filter by date
//if any overdue filter for that also
router.route('/:userid').get((req, res) => {
    Todo.find({userID: req.params.userid})
        .then(todos => res.json(todos))
        .catch(err => res.status(400).json('Error ', + err));
});


router.route('/completed/:userid').get((req, res) => {
    Todo.find({userID: req.params.userid, todoCompleted: true})
        .then(todos => res.json(todos))
        .catch(err => res.status(400).json('Error: ', + err));
});
