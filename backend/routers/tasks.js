const express = require('express');
const mongoose = require('mongoose');
const taskModel = require('../models/taskModel');

const router = express.Router();

router.post('/', async (req, res) => {
    console.log(req.body.create_date);
    const task = new taskModel.Task({
        content: req.body.content,
        isDone: req.body.isDone,
        userId: req.body.userId,
        create_date: req.body.create_date
    });
    console.log(task);
    try {
        const result = await task.save();
        res.send(result);
    } catch (err) {
        res.send(err);
    }

});

router.get('/:userId', async (req, res) => {
    try {
        const tasks = await taskModel.Task.find({userId: req.params.userId});
        console.log(tasks);
        if(!tasks) {
            console.log(`Hello from if no tasks`);
            return res.status(404).send('There is no task for given user');
        }
        
        res.send(tasks);
        
    } catch (err) {
        console.log(err);
    }

});

router.delete('/:id', async (req, res) => {
    console.log('hello from delete');
    const task = await taskModel.Task.findByIdAndRemove(req.params.id);
    console.log(task);
    if (!task) return res.status(404).send('The task with the given ID does not exist');

    res.send(task);
});

router.put('/:id', async (req, res) => {
    let task = await taskModel.Task.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, { new: true });
    
    console.log("Hello from PUT");
 
    res.send(task);
});

module.exports = router;