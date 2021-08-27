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

app.get("/UserList", (req, res) => {
    User.find((err, users) => {
        if (err){
            console.log(err)
        } else {
            res.json(users)
        }
    })
})

app.post("/", (req, res) => {
    const user = new User(req.body)
    user.save().then((user) => {
        res.json(user)
        }).catch(err => {
            res.status(500).send(err.message)
        })
})

app.listen(PORT, () => {
    console.log("Server is running on port" + PORT)
})