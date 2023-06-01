import express from "express"
import dotenv from "dotenv"
dotenv.config()
const server = express()
const PORT = process.env.port || 4000

server.listen(PORT, ()=> {
    console.log(`server is runing at ${PORT}`)
})

server.get("/", (req,res) => {
    res,send("Hello this is spotify clone")
})
