const { User, Thought } = require('../models');

const userController = {
    //get all users
        getAllUsers(req, res){
            User.find({})
            .populate({
                path: 'thoughts',
                select: '-__v'
            })
            .select('-__v')
            .sort({_id: -1})
            .then(dbUserData => res.json(dbUserData))
            .catch(err => {
                console.log(err);
                res.sendStatus(400);
            });
        },

        getUsersById({params}, res){
            User.findOne({ _id: params.id})
                .populate({
                    path: 'thoughts',
                    select: '__v'
                })
                .select('-__v')
                .then(dbUserData => res.json(dbUserData))
                .catch(err => {
                    console.log(err);
                    res.sendStatus(400)
                });
        },

        createUsers({body}, res){
            User.create(body)
             .then(dbUserData => res.json(dbUserData))
             .catch(err => res.json(err));
        }
    }

module.exports = userController;