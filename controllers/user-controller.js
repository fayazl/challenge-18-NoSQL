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
            .then(dbUserData => {
                console.log(dbUserData);
                if(dbUserData){
                    res.status(404).json({ message: 'No user found with this id'});
                    return
                }
                res.json(dbUserData)
            })
            .catch(err => res.json)
        }

}

module.exports = userController;