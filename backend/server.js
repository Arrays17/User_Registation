const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const User = require("./models/User")

mongoose.connect('mongodb://127.0.0.1:27017/users', { useNewUrlParser: true, useUnifiedTopology: true })

mongoose.connection.once('open', () => {
    console.log("MongoDB connection established successfully...")
})

const PORT = 4000;

const app = express()

app.use(cors())
app.use(express.json())

app.listen(PORT, () => {
    console.log("Server is running on port" + PORT)
})