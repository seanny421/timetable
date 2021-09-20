const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = new Schema({
    userID: {
        type: String,
        required: true
    },
    todoText: {
        type: String,
        required: true, 
        trim: true,
        minlength: 3
    },
    todoCompleted: {
        type: Boolean,
        default: false,
        trim: true
    },
    dayDue: {
        type: Number,
    },
},{
    timestamps: true,
});


const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
