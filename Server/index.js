import express from 'express';
import dotenv from 'dotenv'

dotenv.config()
const PORT = process.env.PORT || 4000
const server = express();
server.listen(PORT, () => {
    console.log(`The Server Is Running At ${PORT}`)
})

server.get("/", (req, res) => {
    res.send("Welcome to Spotify Clone")
})