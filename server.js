const express = require("express")
const mongoose = require("mongoose")

// App Config
const app = express()
const port = process.env.PORT || 5000

// Middlewares

// DB Config

//API Endpoints
app.get("/", (req,res) => {
    res.status(200).send("Hello World")
})

//Listener
app.listen(PORT, console.log(`app is running on PORT ${port}`))