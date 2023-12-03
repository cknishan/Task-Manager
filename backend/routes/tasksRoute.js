import express from 'express'
import { Task } from '../models/taskModel.js'

const router = express.Router()

// Route for saving a new Task
router.post('/', async (request, response) => {
    try {
        if (
            !request.body.name ||
            !request.body.tag ||
            !request.body.deadline ||
            !request.body.priority
        ) {
            return response.status(400).send({
                messgage: 'Send all required fields: name, tag, deadline and priority'
            })
        }

        const newTask = {
            name: request.body.name,
            tag: request.body.tag,
            deadline: request.body.deadline,
            priority: request.body.priority,
        };

        const task = await Task.create(newTask)
        return response.status(201).send(task);
    } catch (error) {
        response.status(500).send({ message: error.message })
    }
})

// Route to get all the tasks from database
router.get('/', async (request, response) => {
    try {
        const tasks = await Task.find({});

        return response.status(200).json(
            {
                count: tasks.length,
                data: tasks
            }
        );
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// Route to get task by id from database
router.get('/:id', async (request, response) => {
    try {
        const { id } = request.params
        const task = await Task.findById(id);

        return response.status(200).json(task);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// Updating a Book
router.put('/:id', async (request, response) => {
    try {
        if (
            !request.body.name ||
            !request.body.tag ||
            !request.body.deadline ||
            !request.body.priority
        ) {
            return response.status(400).send({
                messgage: 'Send all required fields: name, tag, deadline and priority'
            })
        }

        const { id } = request.params
        const result = await Task.findByIdAndUpdate(id, request.body)

        if (!result) {
            return response.status(404).json({ message: 'Book not found' })
        }

        return response.status(200).send({ messgae: 'Book updataed successfully' })

    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// Delete a Book
router.delete('/tasks/:id', async (request, response) => {
    try {

        const { id } = request.params
        const result = await Task.findByIdAndDelete(id)

        if (!result) {
            return response.status(404).json({ message: 'Book not found' })
        }

        return response.status(200).send({ messgae: 'Book deleted successfully' })



    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
})

export default router;