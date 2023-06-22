// import https from "http"
// import { EventEmitter } from "node:events"

// const server = https.createServer()
// const emitter = new EventEmitter()
// server.listen(4000)

// const handler = (req, res)=> {
//     console.log(req.method, req.url)
//     switch (req.url){
//         case "/":
//             emitter.emit("home_visited")
//             res.end("Hello")
//             break;
//         case "/getUser":
//             emitter.emit("user_visited")
//             res.end("this is route")
//             break;
//         default:
//             res.end("Hello wrold")    

//     }
    
// }

// const custumHandler1 = (req, res)=> {
//     console.log("user visited getuser from server")
// }

// const custumHandler2 = (req, res)=> {
//     console.log("user visited home user from server")
// }

// server.on("request", handler)
// emitter.on("user_visited", custumHandler1)
// emitter.on("home_visited", custumHandler2)

import express from "express"
import {appendFile} from "fs"

const token = "FTFYGJKLIUGIUYTDFGHJ"
const app = express()

const custumMiddleWare = (req,res,next)=> {
    let {headers} = req
    if (headers['auth']){
        if(headers['auth'] === token){
            next()
        }
        else{
            res.status(300).send({
                message: "Auth token is wrong"
            })
        }
    }else{
        res.status(300).send({
            message: "Auth token is missing"
        })
    }
}

const countVisited = (req,res, next)=> {
    let {method, url} = req 
    appendFile("logger.txt", `visited to url ${url} from the ${method} method \n` , (err)=> {
        if(err) throw err
        console.log("file updated")
    });
    next()
}

app.use(custumMiddleWare)
app.use(countVisited)

app.get("/", (req,res)=> {
    res.send("Hello World")
})
app.get("/getUser", (req,res)=> {
    res.send("getUser visited GET")
})
.post("/getUser", (req,res)=> {
    res.send("getUser visited POST")
})

app.listen(8000)