// import https from 'http'
// import { EventEmitter } from 'node:events'

// const server = https.createServer();
// const emitter = new EventEmitter();


// server.listen(8000); /// emit a event request every time when user request to server (request)

// const handler = (req, res) => {
//     console.log(req.method, req.url)
//     switch (req.url) {
//         case "/":
//             res.end("Hello");
//             break;
//         case "/getUser":

//             // i want emit some event called (user_visited) 
//             emitter.emit("user_visited");
//             res.end("This is User Route")
//             break;
//         case "/hello":
//             res.end("Hello from from server")
//             break;
//         default:
//             res.end("hello world")
//     }
// }

// server.on('request', handler)

// const customHandler = () => {
//     console.log("user visited to getUser route from our server")
// }


// // console user visited to getUser route from our server
// emitter.on('user_visited', customHandler)

import express from 'express'
import { appendFile } from 'fs'

const app = express();

const TOKEN = "GHJFHGJJKGJHKGJHK"


//when request having auth header (GHJFHGJJKGJHKGJHK) then allow them 
const customMiddleware = (req, res, next) => {
    let { headers } = req;
    if (headers['auth']) {
        if (headers['auth'] === TOKEN) {
            next()
        } else {
            res.status(300).send({
                message: "Auth token is wrong"
            })
        }
    } else {
        res.status(300).send({
            message: "Auth token is missing"
        })
    }
}

const countVisited = (req, res, next) => {
    const { method, url } = req;
    appendFile('logger.txt', `visited to ${url} by this ${method} \n`, (err) => {
        if (err) throw err
        console.log("File Updated")
    });
    next()
}


app.use(customMiddleware)
app.use(countVisited)

app.get("/", (req, res) => {
    res.send("Hello")
})

app
    .get('/getUser', (req, res) => {
        res.send("getUser visited")
    })
    .post('/getUser', (req, res) => {
        res.send("getUser visited POST")
    })

app.listen(8000)