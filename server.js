const express = require("express")
const mongoose = require("mongoose")
const Card = require("./DB/db")

connection_url = "mongodb://localhost:27017/TinderDB"

// App Config
const app = express()
const port = process.env.PORT || 5000

// Middlewares
app.use(express.json())

// DB Config
mongoose.connect(connection_url, {
    useCreateIndex:true,
    useFindAndModify:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
})

//API Endpoints
app.get("/", (req,res) => {
    res.status(200).send("Hello World")
})

app.post("/cards", (req, res) => {
    const dbCard = req.body

    Card.create(dbCard, (err, data) => {
        if(err){
            res.status(500).send(err)
        }else{
            res.status(201).send(data)
        }
    })
})

app.get("/cards", (req,res) => {
    Card.find((err, data) => {
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).send(data)
        }
    })
})

//Listener
app.listen(port, console.log(`app is running on PORT ${port}`))