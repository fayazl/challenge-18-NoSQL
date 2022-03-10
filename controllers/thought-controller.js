const { Thought, User } = require('../models');

const thoughtController = {
    getAllThoughts(req, res){
        Thought.find({})
        .select('-__v')
        .sort({_id: -1})
        .then(dbThoughtData => res.json(dbThoughtData))
        .catch(err => {
            console.log(err);
            res.sendStatus(400);
        });
    },

    getThoughtsById({ params}, res){
        Thought.findOne({_id: params.id})
        .select('-__v')
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.sendStatus(400)
        });
    },

    createThoughts({params, body}, res){
        console.log(params)
        Thought.create(body)
            .then(({_id}) => {
                return User.findOneAndUpdate(
                    {_id: params.userId},
                    { $push: {thoughts: _id} },
                    { new: true }
                )
            })
            .then(dbThoughtData => {
                console.log(dbThoughtData);
                if (!dbThoughtData) {
                  res.status(404).json({ message: 'No thought found with this id!' });
                  return;
                }
                res.json(dbThoughtData);
              })
              .catch(err => res.json(err));
    },

    updateThoughts({params, body}, res){
        Thought.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
        .then(dbThoughtData => {
            if (!dbThoughtData) {
              res.status(404).json({ message: 'No thoughts found with this id' });
              return;
            }
            res.json(dbThoughtData);
          })
          .catch(err => res.json(err));
    },

    deleteThoughts({ params }, res) {
        Thought.findOneAndDelete({ _id: params.id })
          .then(dbThoughtData => res.json(dbThoughtData))
          .catch(err => res.json(err));
      },

    addReactions({ params, body }, res) {
       Thought.findOneAndUpdate({ _id: params.thoughtId }, { $push: { reactions: body } }, { new: true, runValidators: true })
           .then(dbThoughtData => {
               if (!dbThoughtData) {
                   res.status(404).json({ message: 'No reactions found by id' });
                   return;
               }
               res.json(dbThoughtData);
           })
            .catch(err => res.json(err));
    },



}

module.exports = thoughtController;