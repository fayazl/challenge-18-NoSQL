const { User, Thought } = require('../models');

const userController = {
    //get all users
        getAllUsers(req, res){
            User.find({})
            .populate({
                path: ''
            })
        }

}