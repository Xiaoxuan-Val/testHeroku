/**
 * Model for user.
 * Model based on user model created for INFO30005 - Peer Reviewed
 * Created for IT PROJECT 2019
 * Group : Odin's Army
 * Initial commit/file creation by Tehara Moonemalle - ID: 879459, Aug 20, 2019
 *
 **/

const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

//model for user [TM Aug 20]
const userSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: true
    },
    familyName: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        index: true,
        required: true
    },
    dob: {
        type: String//Date,
        //default: Date.now//,
        //required: true
    },
    location: {
        address: {
            type: String,
            default: ""
        }
    },
    password: {
        type: String,
        required: true
    },
    dateJoined: {
        type: String//Date,
        //default: Date.now
    }
});

userSchema.methods,validatePassword = function(password) {
    return bcrypt.compare(password, this.password)
};


userSchema.methods.toJson = function() {
    return {
        _id: this.id,
        username: this.username
    }
}



mongoose.model("user", userSchema);
