/**
 * User controllers
 * Controller based on user controllers for INFO30005 - Peer Reviewed
 * INCOMPLETE
 * Created for IT PROJECT 2019
 * Group : Odin's Army
 * Initial commit/file creation by Tehara Moonemalle - ID: 879459, Aug 23, 2019
 *
 **/

const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const passport = require("passport");

const User = mongoose.model("user");

/****************** Controls ******************/
// find username by id [TM Aug 21] based on attributed code
var findUsername = function(req, res) {
	User
		.findOne( { _id: req.params.id })
		.then(found => {
			if (found) {
				res.send({username: found.username});
			} else {
				res.status(404).end();
			}
		})
		.catch(err => {
			res.status(500).end();
			console.log(err);
		});
};


// delete an existing user by id (mongoDB assigned id) [TM Aug 21] based on attributed code
var deleteUser = function(req, res) {
	const { identity: { id } } = req;

	User.findById(id)
		.then(item => item.remove().then(() => res.json({ success: true })))
		.catch(err => res.status(404).json({ success: false }));
};


//Find user by email [TM Aug 21] based on attributed code
var findUserByEmail = function(req, res) {
	const { email } = req.body;

	User
		.findOne({ email: email })
		.then(found => {
			if (found) {
				res.send(found._id);
			} else {
				res.status(404).end();
			}
		})
		.catch(err => {
			res.status(500).end();
			console.log(err);
		});
}


//Find all users [TM Sept 21]
var findAllUsers = function (req, res) {
    User.find((err, users) => {
        if (!err) {
            res.send(users);
        } else {
            res.sendStatus(400);
            console.log("Error getting users", err);
        }
    });
};


//Create a new user [TM Sept 21] based on attributed code
var createNewUser = function(req, res){
    //no blank usernames or passwords
    if (req.body.name == "" || req.body.familyName == "" ||req.body.username == "" || req.body.password == "" || req.body.email == "" || req.body.dob == "") {
        res.sendStatus(422).end();
        console.log("Please fill required field")
        return;
    }

    const user = {
        name: req.body.name,
        familyName: req.body.familyName,
        username: req.body.username,
        email: req.body.email,
        dob: req.body.dob,
        password: req.body.password,
        dateJoined: req.body.dateJoined
    };

    User
        .findOne( { email: user.email } )
        .then(found => {
            if (found) {
                res.status(422).end();
            } else {
                bcrypt
                    .genSalt(10)
                    .then((salt) => {
                        bcrypt
                            .hash(user.password, salt)
                            .then((hash) => {
                                user.password = hash;
                                const newUser = new User(user);

                                newUser
                                    .save()
                                    .then((newUser) => { res.send(newUser.toJson()) })
                                    .catch((err) => {
                                        res.sendStatus(500).end();
                                        console.log("Error adding user" + err);
                                    });
                            })
                            .catch((err) => {
                                console.log("bcrypt error in user.js" + err);
                                user.password = null;
                            });
                    })
                    .catch((err) => {
                        console.log("bcrypt error in user.js" + err);
                        user.password = null;
                    });
                }
        })
};



/********************* Exports *********************/
module.exports.findUsername = findUsername
module.exports.deleteUser = deleteUser;
module.exports.findUserByEmail = findUserByEmail;
module.exports.findAllUsers = findAllUsers;
module.exports.createNewUser = createNewUser;
