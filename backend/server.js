import express, { response } from "express";
import { PORT, mongodbURL } from "./config.js";
import mongoose from "mongoose";
import { Task } from "./models/taskModel.js";

const app = express();

app.get('/', (request, response) => {
    console.log(request)
    return response.status(234).send('Welcome to MERN Tutorial')
});

// Middleware for parsing request body
app.use(express.json())

// Route for saving a new Task\
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

    } catch (error) {
        console.log(err.message)
        response.status(500).send({ message: error.message })
    }
})

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

