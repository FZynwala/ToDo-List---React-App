const mongoose = require('mongoose');
const moment = require('moment');

const taskSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    isDone: {
        type: Boolean,
        required: true
    },
    userId: {
        type: String
    },
    create_date: {
        
    }
});

const Task = mongoose.model('Task', taskSchema);

module.exports.Task = Task;