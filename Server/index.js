import express from 'express'
import dotenv from 'dotenv'

dotenv.config()
const PORT = process.env.PORT || 4000
const server = express()
server.listen(PORT, () => {
    console.log(`server is running at ${PORT}`)
})

server.get('/', (req, res) => {
    res.send("Hello this is Spotify clone")
})