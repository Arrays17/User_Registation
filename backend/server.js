const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const User = require("./models/User")
const methodOverride = require('method-override')
const { response } = require("express");


mongoose.connect('mongodb://127.0.0.1:27017/users', { useNewUrlParser: true, useUnifiedTopology: true })

mongoose.connection.once('open', () => {
    console.log("MongoDB connection established successfully...")
})

const PORT = 4000;

const app = express()

app.use(cors())
app.use(express.json())
app.use(methodOverride('_method'))

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

app.get("/:id", (req, res) => {
    const id = req.params.id
    User.findById(id, (err, user) => {
        res.json(user)
    })
})

app.post("/:id", (req, res) => {
    const id = req.params.id
    User.findById(id, (err, user) => {
        if(!user){
            res.status(404).send("User not found")
        } else {
            user.first = req.body.first;
            user.last = req.body.last;
            user.username = req.body.username;
            user.email = req.body.email;
            user.gender = req.body.gender;
            user.bday = req.body.bday;

            user.save().then(user => {
                res.json(user)
            }).catch(err => res.status(500).send(err.message))
        }
    })
})

app.delete("/delete/:id", (req, res) => {
    console.log("executing")
    const id = req.params.id
    User.findByIdAndRemove(id).exec()
    let user
    try {
      user =  User.findByIdAndDelete(id).exec()
    } catch (err) {
      throw err
    }
})

app.listen(PORT, () => {
    console.log("Server is running on port" + PORT)
})