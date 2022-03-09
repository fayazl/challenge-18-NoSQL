const { Schema, model } = require ('mongoose');
const dateFormat = require('../utils/dateFormat');

const ThoughtSchema = newSchema (

    {
        thoughtText:{
            type: String,
            require: true,
            trim: true,
            maxlength: 280
        },

        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal)
        },

        username: {
            type: String,
            require: true
        },
        reactions: [reactionCount]

    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
)

ThoughtSchema.virtuals('reactionCount').get(function(){
    return this.reactions.length;
})

const User = model('Thought', ThoughtSchema);

module.exports = Thought;