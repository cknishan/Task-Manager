import express from "express";
import { PORT, mongoDBURL } from "./config.js";

console.log(mongoDBURL)

const app = express();

app.listen(PORT, () => {
    console.log(`App listening to port: ${PORT}`)
})