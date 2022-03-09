const { Schema, model } = require ('mongoose');
const dateFormat = require('../utils/dateFormat');

const ReactionSchema = new Schema (

    {
        reactionID: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectID()
        },

        reactionBody: {
            type: String,
            required: true,
            trim: true,
            maxlength: 280,
        },

        username: {
        type: String,
        required: true,
        trim: true
        },

        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal)
        },
    },
    {
        toJSON: {
            getters: true
        }
    }
);

const ThoughtSchema = new Schema (

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
        reactions: [ReactionSchema]

    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

ThoughtSchema.virtual('reactionCount').get(function(){
    return this.reactions.length;
})

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;