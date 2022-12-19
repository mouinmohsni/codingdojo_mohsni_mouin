const User =require('../models/user.model.js');
const jwt = require("jsonwebtoken");
const {secret} = require("../config/jwt.config");
const bcrypt = require('bcrypt');

module.exports ={

    register: (req, res) => {
        // console.log(req.body);
        User.create(req.body)
          .then(user =>{
            console.log(user);
            res.cookie("userToken", jwt.sign({id: user._id}, secret), {httpOnly:true}).json({ msg: "success!", user: user })})
            .catch(err => res.status(400).json(err.errors));
      },

      login: async (req, res) => {
        console.log(req.body.password)
        User.findOne({ email: req.body.email })
            .then(user => {
                if (user == null) {
                    // email not found in users collection
                    res.status(400).json({ msg: "Invalid email ." })
                    res.cookie()
                }
                else {
                    // if we made it this far, we found a user with this email address
                    // let's compare the supplied password to the hashed password in the database
                    bcrypt.compare(req.body.password, user.password)
                        .then(isValid => {

                            if (isValid === true) {
                                // if we made it this far, the password was correct
                                // {httpOnly: true } ensures that the token is only accessible from the server.
                                res.cookie("userToken", jwt.sign({ id: user._id }, secret), { httpOnly: true }).json({ user }) ;
                                console.log(user);
                                

                            }
                            else {
                                // password wasn't a match!
                                console.log("password wasn't a match!")
                                res.status(400).json({ msg: "Invalid login attempt!" })
                            }
                        })
                        // .then((user) => res.json({user}))
                        .catch(err => {
                            console.log(err)
                            res.status(400).json({ msg: "Invalid login attempt!" })
                        })
                }
            })
            .catch(err => res.status(400).json(err.errors));
    },

    logout: (req, res) => {
        res.clearCookie('userToken');
        res.sendStatus(200);
    }


}

module.exports.updateUser = (req, res) => {
    User.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
    })

    .then((user) => res.json({user}))
    .catch((err) => res.status(400).json(err));
};

module.exports.deleteUser = (req, res) => {
    User.deleteOne({ _id: req.params.id })
    .then((result) => res.json({ result }))
    .catch((err) => res.status(400).json(err));
};

module.exports.getAllUsers = (req, res) => {
    User.find()
    .then((founduser) => res.json(founduser))
    .catch((err) => res.status(400).json(err));
};

module.exports.getOneUser = (req, res) => {
    User.findOne({ _id: req.params.id })
.then((user) => res.json(user))
.catch((err) => res.status(400).json(err));
};

module.exports.getOneUserByMail = (req, res) => {
    User.findOne({email: req.body.email })
.then((user) => res.json(user))
.catch((err) => res.status(400).json(err));
};
