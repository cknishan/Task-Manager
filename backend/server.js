import express, { response } from "express";
import { PORT, mongodbURL } from "./config.js";
import mongoose from "mongoose";
import { Task } from "./models/taskModel.js";

const app = express();

// Middleware for parsing request body
app.use(express.json())

app.get('/', (request, response) => {
    console.log(request)
    return response.status(234).send('Welcome to MERN Tutorial')
});


// Route for saving a new Task
app.post('/tasks', async (request, response) => {
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
        console.log(err.message)
        response.status(500).send({ message: error.message })
    }
})

// Route to get all the tasks from database
app.get('/tasks', async (request, response) => {
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
app.get('/tasks/:id', async (request, response) => {
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
app.put('/tasks/:id', async (request, response) => {
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

mongoose
    .connect(mongodbURL)
    .then(() => {
        console.log("App connected to Database")
        app.listen(parseInt(PORT), () => {
            console.log(`App listening to port: ${PORT}`)
        })

    })
    .catch((error) => {
        console.log(error)
    })

