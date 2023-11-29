import express, { response } from "express";
import { PORT, mongodbURL } from "./config.js";
import mongoose from "mongoose";
import tasksRoute from './routes/tasksRoute.js';

const app = express();

// Middleware for parsing request body
app.use(express.json())

app.get('/', (request, response) => {
    console.log(request)
    return response.status(234).send('Welcome to MERN Tutorial')
});

app.use('/tasks', tasksRoute)

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

