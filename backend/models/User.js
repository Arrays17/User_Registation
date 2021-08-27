const mongoose = require("mongoose")

const User = mongoose.Schema({
    username: {
        type: String
    },
    email: {
        type: String
    },
    first: {
        type: String
    },
    last: {
        type: String
    },
    gender: {
        type: String
    },
    bday: {
        type: String
    }
});

module.exports = mongoose.model("User", User);