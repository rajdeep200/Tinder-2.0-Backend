const mongoose = require("mongoose")

const cardSchema = mongoose.Schema({
    name:String,
    imgUrl: String
})

const Card = mongoose.model("UserCard", cardSchema)

module.exports = Card