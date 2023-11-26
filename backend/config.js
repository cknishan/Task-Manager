// Require dotenv and load the .env file

import dotenv from "dotenv"
dotenv.config()

const PORT = process.env.PORT;
const mongodbURL = process.env.MONGO_KEY;

export { PORT, mongodbURL }